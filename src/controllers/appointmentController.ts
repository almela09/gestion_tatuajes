//añadir----completar los campos que faltan.

import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";


//CREAR LA CITA

export const createAppointment = async (req: Request, res: Response) => {
  
  try {
    console.log(req.tokenData)
    const userId = req.tokenData.userId;
    const serviceId = req.body.serviceId;
    const appointmentDate = req.body.appointmentDate;
    

    if (!serviceId || !appointmentDate) {
      return res.status(400).json({
        success: false,
        message: "Service ID and date are needed",
      });
    }

    const newAppointment = Appointment.create({
      userId,
      serviceId,
      appointmentDate,
      notes: req.body.notes || "",
    });

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Appointment can't be created",
      error: error,
    });
  }
};

//Recuperar una cita
export const getMyAppointments = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.userId;

    const myAppointments = await Appointment.find({
      where: { userId: userId }, // Ajuste aquí
      relations: ["user", "service"],
    });

    if (myAppointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No appointments found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: myAppointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Appointments can't be retrieved",
      error: error,
    });
  }
};


//RECUPERAR CITA POR ID
export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.userId;
    const appointmentId = req.params.id;

    const appointmentFound = await Appointment.findOne({
      where: { id: parseInt(appointmentId), userId },
      relations: ["user", "service"],
    });

    if (!appointmentFound) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment retrieved successfully",
      data: appointmentFound,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Appointment can't be retrieved",
      error: error,
    });
  }
};

//MODIFICAR UNA CITA POR ID
export const updateAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointmentId = req.params.id;
    const { serviceId, appointmentDate } = req.body;

    let appointmentToUpdate = await Appointment.findOne({
      where: {
        id: parseInt(appointmentId),
        userId: req.tokenData.userId, 
      },
    });

    if (!appointmentToUpdate) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // Actualiza los campos necesarios
    appointmentToUpdate.serviceId = serviceId;
    appointmentToUpdate.appointmentDate = appointmentDate;

    await appointmentToUpdate.save();

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: appointmentToUpdate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Appointment can't be updated",
      error: error,
    });
  }
};
