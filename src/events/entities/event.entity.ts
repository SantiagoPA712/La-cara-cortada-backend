import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('text')
  description: string;

  @Column({ length: 255 })
  location: string;

  @Column('date')
  date: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column('simple-array', { nullable: true })
  featuredModels: string[]; 

  @Column('simple-array', { nullable: true })
  featuredProducts: string[]; 
}

