import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string; 

  @Column('text', { nullable: true })
  description: string; 

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; 

  @Column({ length: 255, nullable: true })
  category: string; 

  @Column({ length: 255, nullable: true })
  imageUrl: string; 

  @Column('int', { default: 0 })
  stock: number; 

  @Column('boolean', { default: false })
  isFeatured: boolean; 

  @CreateDateColumn()
  createdAt: Date; 
}
