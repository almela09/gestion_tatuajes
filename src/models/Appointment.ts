import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./User";
import { Service } from "./Service";

@Entity("appointments")
export class Appoinment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "appointment_date" })
  appointmentDate!: Date;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Service, (service) => service.appointments)
  @JoinColumn({ name: "service_id" })
  service!: Service;
}
