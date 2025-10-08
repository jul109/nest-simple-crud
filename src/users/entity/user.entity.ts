
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text',{unique:true})
  username: string;

  @Column('text', {array: true, default: []})
  roles: string[];

  @Column('text',{select:false})
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
