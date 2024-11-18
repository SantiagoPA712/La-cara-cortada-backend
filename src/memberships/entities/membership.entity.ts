import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('memberships')
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  tier: string;

  @Column('text')
  benefits: string; 

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; 

  @Column('simple-array', { nullable: true })
  restrictedActivities: string[]; 

  @CreateDateColumn()
  createdAt: Date; 
}

