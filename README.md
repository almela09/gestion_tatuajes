
#PROYECTO TATTO STUDIO

<img src="/img/headertatuaje.jpg">



# ¿De que va el proyecto?

Se trata de una aplicacion en la que los usuarios podrán registrarse, iniciar sesión y acceder a su area de usuario personal. Podrán coger cita para los servicios de tatuajes y piercings que ofrece el estudio.

#Tecnologías empleadas
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeORM](https://img.shields.io/badge/TypeOrm-%23C70D2C?style=for-the-badge&color=%23C70D2C) ![Thunderclient](https://img.shields.io/badge/Thunder_Client-%237A1FA2?style=for-the-badge) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

#Diseño Base de Datos

<img src="/img/BDD.jpg">

#Endpoints

| User | Service | Appointment |
|-----------|-----------|-----------|
| app.get("/api/users",auth,getUsers, isSuperAdmin);  | app.get( '/api/services', getServices);    |  app.post("/api/appointments", auth, createAppointment ); |
|   app.get("/api/users/profile",auth, getProfile);  |    | app.get("/api/myappointments/:id",auth, getAppointmentById);  |
| app.put("api/users/profile",auth, updateUserById); |    | app.put("/api/appointments/:id",auth, updateAppointmentById);  |
| app.put("api/users/profile",auth, updateUserById); |     |app.get("/api/appointments/:id",auth,getMyAppointments);


### Para configurar un proyecto de Express con TypeScript, sigue estos pasos:

- Crea una carpeta para tu proyecto.

- Inicializa el archivo package.json con 

`` npm init``

- Instala Express con  

`` npm install express --save ``

- Instala TypeScript como dependencia de desarrollo con 

`` npm install typescript -D ``

- Instala los tipos de Express y Node con 

`` npm install @types/express @types/node -D ``

- Configura el archivo tsconfig.json con

`` npx tsc --init``

- Instalar librería de nodemon

`` npm install --save-dev nodemon``

#Script Compilacion

``  "dev": "nodemon ./src/server.ts"  ``


