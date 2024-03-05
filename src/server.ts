import express from "express";
import dotenv from "dotenv";
import { getRoles } from "./controllers/roleController";


dotenv.config(); 


const app = express();

const PORT = process.env.PORT || 4001;
app.get('/healthy',)


//roles routes endpoint
app.get('/api/roles', getRoles);


app.listen(PORT,()=>{

    console.log("el server tira");
} )
