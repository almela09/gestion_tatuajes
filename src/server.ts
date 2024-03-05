import express from "express";
import dotenv from "dotenv";
import { createRole, getRoles, updateRole } from "./controllers/roleController";


dotenv.config(); 


const app = express();

const PORT = process.env.PORT || 4001;
app.get('/healthy',)


//roles routes endpoint
app.get('/roles', getRoles);
app.post('/role',createRole);
app.put ('/role/:id', updateRole);
// app.delete ('/role', deleteRole);

//user routes endpoint


app.listen(PORT,()=>{

    console.log("el server tira");
} )
