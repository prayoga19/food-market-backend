import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RepositoryService } from 'src/models/repository/repository.service';
import { CreateProductDto } from './dto/create-product.dto';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Product } from 'src/models/entities/product.entity';
import { updateProductDto } from './dto/update-product';

@Injectable()
export class productService {
  public constructor(private readonly repoService: RepositoryService) {}

  async createProduct(payloads: CreateProductDto) {
    const productData = await this.repoService.productRepo.create({
      title: payloads.title,
      rating: payloads.rating,
      price: payloads.price,
      description: payloads.description,
      type: payloads.type,
      ingredients: payloads.ingredients,
    });

    const roleUser = await this.repoService.userRepo.findOne({
      where: { role: 'admin' },
    });
    if (roleUser) {
      await this.repoService.productRepo.save(productData);
      return productData;
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_ACCEPTABLE,
        error_code: 'USER_NOT_ACCEPTABLE',
        message: 'only admin can access',
      },
      HttpStatus.NOT_ACCEPTABLE,
    );
  }

  async getProductById(id: string) {
    const productData = await this.repoService.productRepo.findOne({
      where: { id },
    });

    if (productData) {
      return productData;
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error_code: 'PRODUCT_NOT_FOUND',
        message: 'data not found on system',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  async getAllProduct(options: IPaginationOptions) {
    const productData = await this.repoService.productRepo
      .createQueryBuilder('product')
      .orderBy('product.created_at', 'DESC');

    return paginate<Product>(productData, options);
  }

  async updateProduct(id: string, payloads: updateProductDto) {
    await this.repoService.productRepo.update(id, payloads);
    const updateProductData = await this.repoService.productRepo.findOne({
      where: { id },
    });
    if (updateProductData) {
      return updateProductData;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'PRODUCT_NOT_FOUND',
          message: 'data not found on system',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
