//AÑADIR
import { Request, Response } from "express";
import { Service } from "../models/Service";

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find({
      select: {
        id: true,
        serviceName: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "services retrieved successfully",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "services cant be retrieved",
      error: error,
    });
  }
};
