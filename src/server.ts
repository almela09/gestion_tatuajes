import express, { Application } from "express"; // desde que librería? express.
import dotenv from "dotenv";
import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from "./controllers/roleController";
import { AppDataSource } from "./database/db";
import { getUserById, getUsers, updateUserById } from "./controllers/userController";
import { createAppointment, getAppointmentById, getMyAppointments, updateAppointmentById} from "./controllers/appointmentController";
import { auth } from "./database/middlewares/auth";
import { login, register } from "./controllers/authController";

dotenv.config();

const app: Application = express(); //ejecutar funcion y guardar en una variable.

const PORT = process.env.PORT || 4000;

app.get("/api/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});


//AUTH routes
app.post ('/api/auth/register', register)
app.post('/api/auth/login', login)


//Roles routes -endpoint.
app.get("/api/roles", getRoles); //lo modificamos en roleControllers.
app.post("/api/roles", createRole);
app.put("/api/roles/:id", updateRole); //cambiar informacion de todas las columnas /// PARAMETRO DE RUTA :id, significa que este dato es dinámico.
app.delete("/api/roles/:id", deleteRole);


// User routes
app.get("/api/users", getUsers );
app.get("/api/users/profile", getUserById);
app.put("api/users/profile",updateUserById);

//Appointments
app.post("/api/appointments", auth, createAppointment); //para crear la cita
app.get("/api/myappointments", auth,getMyAppointments); //ver mi cita
app.put("/api/appointments/:id",auth, updateAppointmentById); //modificar/actualizar cita
app.get("/api/appointments/:id",auth, getAppointmentById); //ver cita por ID







//la app tiene que escuchar---- RUTAS. Por ejemplo si no la tienes que mandas? un 404 o no existe.
//Estructura básica para el servidor
const startServer = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Database connected");

      app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

startServer();
