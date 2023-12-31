import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  brand: string;
  @Column({ default: 0 })
  recommendations: number;
  @JoinTable()
  @ManyToMany(() => Flavor, (f) => f.coffees, { cascade: true })
  flavors: Flavor[];
}
