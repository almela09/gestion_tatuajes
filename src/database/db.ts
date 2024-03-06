//enlazar la base de datos

import "reflect-metadata";
import "dotenv/config";

import { DataSource } from "typeorm";
import { Roles1709670304552 } from "./migrations/1709670304552-roles";
import { Users1709671000479 } from "./migrations/1709671000479-users";
import { Services1709671010055 } from "./migrations/1709671010055-services";
import { Appointments1709671019629 } from "./migrations/1709671019629-appointments";
import { Role } from "../models/Role";
import { User } from "../models/User";
import { Service } from "../models/Service";
import { Appointment } from "../models/Appointments";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  entities: [Role, User, Service, Appointment],
  migrations: [
    Roles1709670304552,
    Users1709671000479,
    Services1709671010055,
    Appointments1709671019629,
  ],
  synchronize: false,
  logging: false,
});
