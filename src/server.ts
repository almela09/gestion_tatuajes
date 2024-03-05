
import express, { Application } from "express"; // desde que librería? express.
import dotenv from "dotenv";
import {
    createRole,
    deleteRole,
    getRoles,
    updateRole,
  } from "./controllers/roleController"
import { AppDataSource } from "./database/db";
import { getUsers } from "./controllers/userController";



dotenv.config();

const app: Application = express(); //ejecutar funcion y guardar en una variable.

const PORT = process.env.PORT || 4000;

app.get("/api/healthy", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

//Roles routes -endpoint.
app.get("/api/roles", getRole); //lo modificamos en roleControllers.
app.post("/api/roles", createRole);
app.put("/api/roles/:id", updateRole); //cambiar informacion de todas las columnas /// PARAMETRO DE RUTA :id, significa que este dato es dinámico.
app.delete("/api/roles/:id", deleteRole);


//AUTH routes
// app.post('/api/auth/register', register)

// User routes
app.get('/api/users' )
app.get ('/api/users/profile')
app.put ('api/users/profile')

//Appointments

app.post('api/appointments')
app.put('/api/appointments')
app.get('/api/appointments/{id}')
app.get('/api/appointments')
// app.get('/api/users/:id', getUserById)
// app.put('/api/users/:id', updateUserById)
// app.delete('/api/users/:id', deleteUserById)


//services routes


//appointments routes



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
