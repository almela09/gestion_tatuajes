//añadir----completar los campos que faltan.
import { Request, Response } from "express";
import { Appointment } from "../models/Appointments";
import { User } from "../models/User";

export const getAppointment = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Appointment retrieved successfuly",
  });
};

export const createAppointment = async (req: Request, res: Response) => {
  try {
    // recuperar la info a traves del body
    console.log(req.body);
    const name = req.body.name;

    const newAppointment = await Appointment.create({
      //aqui van movidas
    }).save();

    res.status(201).json({
      success: true,
      message: "Role created",
      data: newAppointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Appointment cant be created",
      error: error,
    });
  }
};

export const updateAppointment = (req: Request, res: Response) => {
  // recuperar parametros de la ruta
  console.log(req.params.id);

  res.status(200).json({
    success: true,
    message: "Appointment updated",
  });
};

export const deleteAppointment = (req: Request, res: Response) => {
  // recuperar parametros de la ruta
  console.log(req.params.id);

  res.status(200).json({
    success: true,
    message: "Appointment deleted",
  });
};
