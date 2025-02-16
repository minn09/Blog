import { Request, Response } from "express";
import { AppDataSource } from "../../src/config/data-source";
import { Users } from "../entity/User";

// Obtener todos los usuarios
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const newUser = userRepository.create(req.body);
    const savedUser = await userRepository.save(newUser);
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const { id } = req.params;
    const user = await userRepository.findOneBy({ id: parseInt(id) });

    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    userRepository.merge(user, req.body);
    const updatedUser = await userRepository.save(user);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar usuario", error });
  }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userRepository = AppDataSource.getRepository(Users);
    const { id } = req.params;
    const result = await userRepository.delete(id);

    if (result.affected === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar usuario", error });
  }
};
