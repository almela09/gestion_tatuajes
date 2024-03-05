
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from './Role';
import { Appointment } from './Appointments';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  roleId!: number;

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn({ name: "roleId" })
  role!: Role;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column()
  fullName!: string;

  @Column({ nullable: true })
  phoneNumber!: string;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments!: Appointment[];
}
