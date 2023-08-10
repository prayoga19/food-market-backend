import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { productService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/roles/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { updateProductDto } from './dto/update-product';
@ApiTags('product')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('product')
export class productController {
  constructor(private readonly productService: productService) {}

  @Post('create')
  @Roles(Role.Admin)
  async create(@Body() payloads: CreateProductDto) {
    return await this.productService.createProduct(payloads);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    const result = await this.productService.getAllProduct({
      page,
      limit,
    });
    return result;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProduct: updateProductDto,
  ) {
    return this.productService.updateProduct(String(id), updateProduct);
  }
}
