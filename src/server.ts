import express, { Application } from "express"; // desde que librería? express.
import dotenv from "dotenv";

import { AppDataSource } from "./database/db";

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
app.get("/api/roles"); //lo modificamos en roleControllers.
app.post("/api/roles");
app.put("/api/roles/:id"); //cambiar informacion de todas las columnas /// PARAMETRO DE RUTA :id, significa que este dato es dinámico.
app.delete("/api/roles/:id");


// User routes
app.get("/api/users");
app.get("/api/users/profile");
app.put("api/users/profile");


//Services routes



//Appointments

app.post("api/appointments");
app.put("/api/appointments");
app.get("/api/appointments/{id}");
app.get("/api/appointments");


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
