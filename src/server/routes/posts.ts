import { Router } from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controllers/postsController";

const router: Router = Router();

// Obtener todos los posts
router.get("/", getPosts);

// Crear un nuevo post
router.post("/", createPost);

// Actualizar un post
router.put("/:id", updatePost);

// Eliminar un post
router.delete("/:id", deletePost);

export default router;