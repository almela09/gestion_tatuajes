import { Request, Response} from "express";

import bcrypt from "bcrypt";

import { User } from "../models/User";

import jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response) => {
  try {
    // recuperar info por body

    const email = req.body.email;
    const password = req.body.password;
  

    // validamos datos

    // la contraseña tiene que tener 6 caracteres:
    if (password.length < 6 || password.length > 6) {
      return res.status(400).json({
        success: false,
        message: "la contraseña debe tener 6 caracteres",
      });
    }

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "format email invalid",
      });
    }
    // tratamos la data (encriptamos contraseña)

    const passwordEncrypted = bcrypt.hashSync(password, 6);

    // guardamos datos del registro

    const newUser = await User.create({
      email: email,
      password: passwordEncrypted,
      
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "user can't be registered",
      error: error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    // RECUPERAR INFO

    const email = req.body.email;
    const password = req.body.password;

    
    // validacion de email password

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are needed",
      });
    }
    const user = await User.findOne({
      where: { email: email },
      relations: ["role"], // Se carga la relación 'role'
      select: ["userId", "password", "email", "role"], // Selecciona las propiedades necesarias, incluida la relación
    });
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email o Password invalid",
      });
    }
    
    // Verifica la contraseña
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Email o Password invalid",
      });
    }
    
    const token = jwt.sign({
      userId: user.userId,
      roleName: user.role.name, // Accede a través de la propiedad 'role' y luego 'name'
    }, process.env.JWT_SECRET as string, {
      expiresIn: "2h",
    });
    
    res.status(200).json({
      success: true,
      message: "User logged",
      token: token,
    });
    
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "user cant be logged",
      error: error.message,
    });
  }
};
