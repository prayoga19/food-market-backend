import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity({ name: 'transaction' })
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  quantity: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  amount: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  order_number: string;

  @Column({
    type: 'varchar',
    nullable: false,
    enum: ['delivered', 'on_delivery', 'pending', 'cancelled'],
    default: 'pending',
  })
  order_status: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  payment_link: string;

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

  @ManyToOne(() => Product, (product) => product.transaction)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => User, (user) => user.transaction)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
