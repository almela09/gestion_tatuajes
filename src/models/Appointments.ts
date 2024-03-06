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

@Entity()
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "userId" })
  user!: User;

  @Column()
  serviceId!: number;

  @ManyToOne(() => Service, (service) => service.appointments)
  @JoinColumn({ name: "serviceId" })
  service!: Service;

  @Column()
  appointmentDate!: Date;

  @Column()
  status!: string;

  @Column({ type: "text", nullable: true })
  notes!: string;
}
