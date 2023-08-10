import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';
import { Transaction } from '../entities/transaction.entity';
import { RepositoryService } from './repository.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Product, Transaction])],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class RepositoryModule {}
