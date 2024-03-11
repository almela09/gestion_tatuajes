import { Request, Response } from "express";

import bcrypt from "bcrypt";

import { User } from "../models/User";

import jwt from "jsonwebtoken";


//Registro con email  y password
export const register = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
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

    // encriptar la contraseña

    const passwordEncrypted = bcrypt.hashSync(password, 6);

    //aqui se guardaran los datos del registro
    const newUser = await User.create({
      email: email,
      password: passwordEncrypted,
    }).save();
    res.status(201).json({
      success: true,
      message: "User registered succesfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user cant be registered",
      error: error,
    });
  }
};

//Esto es el login
export const login = async (req: Request, res: Response) => {
  try {
    //recuperar la info

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
      where: {
        email: email,
      },
      relations: {
        role: true,
      },
      select: {
        id: true,
        password: true,
        email: true,
        role: {
          id: true,
          name: true,
        },
      },
    });
    
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email o Pasword invalid",
      });
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Email o Pasword invalid",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        roleName: user.role.name,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({
      success: true,
      message: "user logged",
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
