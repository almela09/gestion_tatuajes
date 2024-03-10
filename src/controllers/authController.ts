import { Request, Response} from "express";

import bcrypt from "bcrypt";

import { User } from "../models/User";

import jwt from "jsonwebtoken";



//ME DA UNDEFINED AL MANDARLE INFO EN VEZ DE DEVOLVERME EL OBJETO!!!!!!!!!!!
export const register = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        
        res.status(201).json(
            {
                success: true,
                message: "User registered succesfully"


            }

            
        )
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be registered",
            error:error

        })
        
    }
}
   


