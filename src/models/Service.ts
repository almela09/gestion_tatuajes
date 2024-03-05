

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Appointment } from './Appointments';

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @OneToMany(() => Appointment, appointment => appointment.service)
  appointments!: Appointment[];
}
