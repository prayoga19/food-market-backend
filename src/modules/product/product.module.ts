import { Module } from '@nestjs/common';
import { productService } from './product.service';
import { productController } from './product.controller';

@Module({
  imports: [],
  controllers: [productController],
  providers: [productService],
  exports: [productService],
})
export class ProductModule {}
