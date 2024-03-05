//enlazar la base de datos

import "reflect-metadata"
import 'dotenv/config'

import { DataSource } from "typeorm"
import { Roles1709669387677 } from "./migrations/1709669387677-roles"
import { Users1709669403345 } from "./migrations/1709669403345-users"
import { Services1709669414955 } from "./migrations/1709669414955-services"
import { Appointments1709669425026 } from "./migrations/1709669425026-appointments"



export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST || "localhost",
port: Number(process.env.DB_PORT)||3306,
username: process.env.DB_USER ||"root",
password: process.env.DB_PASSWORD || "",
database: process.env.DB_DATABASE || "",
entities: [],
migrations: [Roles1709669387677, Users1709669403345,Services1709669414955,Appointments1709669425026],
synchronize: false,
logging: false,
})