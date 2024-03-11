//añadir----completar los campos que faltan.

import { Request, Response } from "express";
import { Appoinment } from "../models/Appointment";

//CREAR LA CITA

export const createAppointment = async (req: Request, res: Response) => {
  // Recuperar la info
  try {
    const userId = req.tokenData.userId;
    const serviceId = req.body.serviceId;
    const appointmentDate = req.body.appointmentDate;

    if (!serviceId || !appointmentDate) {
      return res.status(400).json({
        success: false,
        message: "Service ID and date are needed",
      });
    }
    const newAppointment = await Appoinment.create({
      appointmentDate: appointmentDate,
      user: {
        id: userId,
      },
      service: {
        id: serviceId,
      },
    }).save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Appointment can't be created",
      error: error.message,
    });
  }
};

// RECUPERAR 1 CITA:

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const userId = req.tokenData.userId;
    const appointmentId = req.params.id;

    const appointmentFound = await Appoinment.findOne({
      where: {
        id: parseInt(appointmentId),
        user: {
          id: userId,
        },
      },
      relations: {
        service: true,
      },
    });

    if (!appointmentFound) {
      res.status(404).json({
        success: false,
        message: "appointment not found",
      });
    }

    res.status(200).json({
      suceess: true,
      message: "Appointmen retrieved successfully",
      data: appointmentFound,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Appointment cant be retrieved",
      error: error,
    });
  }
};

// RECUPERAR MIS CITAS

export const getMyAppointments = async (req: Request, res: Response) => {
  

  try {
    const userId = req.tokenData.userId;

    const myAppointments = await Appoinment.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        user: true,
        service: true,
      },
    });
    if (!myAppointments) {
      res.status(404).json({
        success: false,
        message: "appointments not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointments retrieved",
      data: myAppointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Apointments can't be retrieved",
    });
  }
};

// MODIFICAR CITA

export const updateAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointmentId = req.params.id;
    const serviceId = req.body.serviceId;
    const appointmentDate = req.body.appoinTmentDate;

    const appointmentToUpdate = await Appoinment.findOne({
      where: {
        id: parseInt(appointmentId),
        user: {
          id: req.tokenData.userId,
        },
      },
    });

    if (!appointmentToUpdate) {
      return res.status(404).json({
        success: false,
        message: "appointment not found",
      });
    }

    const appointmentUpdated = await Appoinment.update(
      {
        id: parseInt(appointmentId),
      },
      {
        service: {
          id: parseInt(serviceId),
        },
        appointmentDate: appointmentDate,
      }
    );
    res.status(200).json({
      success: true,
      messagge: "service updeted",
      data: appointmentUpdated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messagge: "Appointment can't be  updated",
      error: error,
    });
  }
};
