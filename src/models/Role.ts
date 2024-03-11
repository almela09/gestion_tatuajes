import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";

import { User } from "./User";

@Entity("roles")
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "title" })
  name!: string;

  @OneToMany(() => User, (user) => user.role)
  users!: User[];
}
