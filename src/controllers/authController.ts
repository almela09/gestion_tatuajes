import { Request, Response } from "express";

import bcrypt from "bcrypt";

import { User } from "../models/User";

import jwt from "jsonwebtoken";
// import { log } from "console";

export const register = async (req: Request, res: Response) => {
  try {
    // recuperar info por body

    const email = req.body.email;
    const password = req.body.password;
    // const firstName = req.body.first_name
    // const lastName = req.body.last_name

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
      // first_name: firstName,
      // last_name: lastName
    }).save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
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

    console.log("123");

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
        role_id: true,
      },
      select: {
        id: true,
        password: true,
        email: true,
        role_id: {
          id: true,
          name: true,
        },
      },
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email o Pasword invalid",
      });
    }
    console.log("456");
    const isValidPassword = bcrypt.compareSync(password, user.password);
    console.log("789");
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Email o Pasword invalid",
      });
    }
    console.log(100);

    const token = jwt.sign(
      {
        userId: user.id,
        roleName: user.role_id.name,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "2h",
      }
    );

    console.log(112);

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
