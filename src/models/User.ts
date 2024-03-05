
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, BaseEntity } from 'typeorm';
import { Role } from './Role';
import { Appointment } from './Appointments';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number
  
    @Column({name: 'name'})
    name!: string
  
    @Column({name: 'password'})
    password!: string
  
    @Column({name: 'email'})
    email!: string
  
    @Column({name: 'created_at'})
    createdAt!: Date
  
    @Column({name: 'updated_at'})
    updatedAt!: Date
  
    @Column({name: 'is_active'})
    isActive!: boolean
  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments!: Appointment[];
}
