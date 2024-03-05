import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ name: "name" })
    name!: string;
  
    @Column({ name: "password" })
    password!: string;
  
    @Column({ name: "createdAt", type: "timestamp" })
    createdAt!: Date;
  
    @Column({ name: "updatedAt", type: "timestamp" })
    updatedAt!: Date;
  
    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" }) // campo personalizado en la bd
    role!: Role;
  }