// todas las funciones que afecteen a mi entidad roles

import { Request, Response } from "express"



export const getRoles = (req: Request,res: Response)=>{
    res.status(200).json(
        {
           success:true,
           message: "Roles retrieved succesfully" 
        }
    )
}