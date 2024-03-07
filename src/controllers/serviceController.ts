//AÑADIR
import { Request, Response } from "express";
import { Service } from "../models/Service";


export const getService = (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Service retrieved successfuly",
    });
  };
  
  export const createService = async (req: Request, res: Response) => {
    try {
      // recuperar la info a traves del body
      console.log(req.body);
      const name = req.body.name;
  
      const newService = await Service.create({
        //aqui van movidas
      }).save();
  
      res.status(201).json({
        success: true,
        message: "Service created",
        data: newService,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Service can't be created",
        error: error,
      });
    }
  };
  
  export const updateService = (req: Request, res: Response) => {
    // recuperar parametros de la ruta
    console.log(req.params.id);
  
    res.status(200).json({
      success: true,
      message: "Service updated",
    });
  };
  
  export const deleteService = (req: Request, res: Response) => {
    // recuperar parametros de la ruta
    console.log(req.params.id);
  
    res.status(200).json({
      success: true,
      message: "Service deleted",
    });
  };
  