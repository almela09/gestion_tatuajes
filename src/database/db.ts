//enlazar la base de datos

import "reflect-metadata";
import "dotenv/config";

import { DataSource } from "typeorm";

import { Role } from "../models/Role";
import { User } from "../models/User";
import { Service } from "../models/Service";
import { Appoinment } from "../models/Appointment";
import { Roles1710061991148 } from "./migrations/1710061991148-roles";
import { Users1710062022422 } from "./migrations/1710062022422-users";
import { Services1710062052390 } from "./migrations/1710062052390-services";
import { Appointments1710062080834 } from "./migrations/1710062080834-appointments";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  entities: [User, Role, Service, Appoinment],
  migrations: [
    Roles1710061991148,
    Users1710062022422,
    Services1710062052390,
    Appointments1710062080834,
  ],
  synchronize: false,
  logging: false,
});
