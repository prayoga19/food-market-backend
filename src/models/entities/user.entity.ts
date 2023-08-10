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

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  photo: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  phone_number: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  house_number: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  city: string;

  @Column({
    type: 'varchar',
    nullable: false,
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: string;

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

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  @JoinColumn({ name: 'id' })
  transaction: Transaction[];
}
