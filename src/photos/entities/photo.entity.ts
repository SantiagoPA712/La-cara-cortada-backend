import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('photos')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string; 

  @Column('text')
  description: string; 

  @Column({ length: 255 })
  url: string; 

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; 

  @Column({ length: 255, nullable: true })
  category?: string; 

  @Column('simple-array', { nullable: true })
  formatsAvailable?: string[]; 

  @CreateDateColumn()
  createdAt: Date; 
}
