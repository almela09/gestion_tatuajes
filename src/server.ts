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
// import { auth } from "./database/middlewares/auth";
import { login, register } from "./controllers/authController";
// import { isSuperAdmin } from "./database/middlewares/isSuperAdmin";
import { createService, deleteService, getService } from "./controllers/serviceController";

dotenv.config();

const app: Application = express(); //ejecutar funcion y guardar en una variable.

const PORT = process.env.PORT || 4000;

app.get("/api/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});


//AUTH routes -endpoint.
app.post ('/api/auth/register')
app.post('/api/auth/login')


//Roles routes -endpoint.
app.get("/api/roles"); //lo modificamos en roleControllers.
app.post("/api/roles");
app.put("/api/roles/:id"); //cambiar informacion de todas las columnas /// PARAMETRO DE RUTA :id, significa que este dato es dinámico.
app.delete("/api/roles/:id");


// User routes -endpoint.
app.get("/api/users");
app.get("/api/users/profile");
app.put("api/users/profile");


//Services routes -endpoint.
app.post ('/api/services', );
app.get( '/api/services', );
app.delete('/api/services/:id');

//Appointments routes -endpoint.
app.post("/api/appointments", ); //para crear la cita
app.get("/api/myappointments"); //ver mi cita
app.put("/api/appointments/:id"); //modificar/actualizar cita
app.get("/api/appointments/:id"); //ver cita por ID







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
