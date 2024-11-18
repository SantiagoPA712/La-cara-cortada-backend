import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('models')
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string; 

  @Column('text', { nullable: true })
  portfolio: string; 

  @Column('text', { nullable: true })
  bookingInfo: string; 

  @Column('text', { nullable: true })
  photoUrl: string; 

  @Column('text', { nullable: true })
  achievements: string; 

  @CreateDateColumn()
  createdAt: Date; 
}
