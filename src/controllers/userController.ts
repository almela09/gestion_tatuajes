import { Request, Response } from "express";
import { User } from "../models/User";

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const userList = await User.find({
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         createdAt: true,
//         updatedAt: true,
//       },
//     });

//     res.status(200).json({
//       success: true,
//       message: "users retrieved successfully",
//       data: User,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "users can't be retrieved",
//       error: error,
//     });
//   }
// };
export const getUsers = async (req: Request, res: Response) => {
  try {
    const userList = await User.find({
      select: ["userId", "username", "email", "createdAt", "updatedAt"], // Ajustado a los nombres correctos
    });

    res.status(200).json({
      success: true,
      message: "users retrieved successfully",
      data: userList, // Cambiado de 'User' a 'userList' para enviar los datos correctos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "users can't be retrieved",
      error: error,
    });
  }
};


// export const getUserById = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.id;

//     const user = await User.findOneBy({
//       id: parseInt(userId),
//     });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "user not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "user retrieved",
//       data: user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "user can't be retrieved",
//       error: error,
//     });
//   }
// };

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const user = await User.findOneBy({
      userId: parseInt(userId), // Cambiado de 'id' a 'userId'
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "user retrieved",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user can't be retrieved",
      error: error,
    });
  }
};



// export const updateUserById = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.id;
//     const name = req.body.name;

//     // validar datos
//     const user = await User.findOneBy({
//       id: parseInt(userId),
//     });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "user not found",
//       });
//     }

//     // tratar datos

//     // actualizar en BD
//     const userUpdated = await User.update(
//       {
//         id: parseInt(userId),
//       },
//       {
//         name: name,
//       }
//     );

//     //responder
//     res.status(200).json({
//       success: true,
//       message: "user updated",
//       data: userUpdated,
//     });
    
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "user cant be updated",
//       error: error,
//     });
//   }
// };

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { username } = req.body; // Cambiado para reflejar el cambio de 'name' a 'username'

    // Se busca el usuario por 'userId'
    const user = await User.findOneBy({
      userId: parseInt(userId),
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    // Se actualiza el usuario
    const userUpdated = await User.update(userId, {
      username, // Ajustado para usar 'username'
    });

    res.status(200).json({
      success: true,
      message: "user updated",
      data: userUpdated,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user can't be updated",
      error: error,
    });
  }
};


// export const deleteUserById = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.id;

//     const userToRemove: any = await User.findOneBy({
//       id: parseInt(userId),
//     });

//     if (!userToRemove) {
//       res.status(404).json({
//         success: false,
//         message: "user cant be deleted",
//       });
//     }

//     const userDeleted = await User.delete(userToRemove);

//     res.status(200).json({
//       success: false,
//       message: "user deleted",
//       data: userDeleted,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "user cant be deleted",
//       error: error,
//     });
//   }
// };
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const userToRemove = await User.findOneBy({
      userId: parseInt(userId), // Cambiado de 'id' a 'userId'
    });

    if (!userToRemove) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const userDeleted = await User.delete(userId); // Usar solo el 'userId' para la función delete

    res.status(200).json({
      success: true, // Cambiado de 'false' a 'true'
      message: "user deleted",
      data: userDeleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user can't be deleted",
      error: error,
    });
  }
};
