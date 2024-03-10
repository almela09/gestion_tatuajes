import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { User } from "./User";

@Entity("roles") // Correctamente alineado con el nombre de la tabla en MySQL
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  role_id!: number; //esto lo he cambiado

  @Column()
  name!: string;

  
  @OneToMany(() => User, (user) => user.role)
  users!: User[];
}
