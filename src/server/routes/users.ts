import { Router} from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/usersController";

const router:Router = Router();

// Obtener todos los usuarios
router.get("/", getUsers);

// Crear un nuevo usuario
router.post("/", createUser);

// Actualizar un usuario
router.put("/:id", updateUser);

// Eliminar un usuario
router.delete("/:id", deleteUser);

export default router;
