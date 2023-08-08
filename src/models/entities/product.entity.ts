import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  rating: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  price: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  type: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  ingredients: string;

  @Column({
    type: 'varchar',
    nullable: false,
    enum: ['sold_out', 'available'],
    default: 'available',
  })
  status: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: false,
  })
  updated_at: Date;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
    nullable: false,
  })
  deleted_at: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.product)
  @JoinColumn({ name: 'id' })
  transaction: Transaction[];
}
