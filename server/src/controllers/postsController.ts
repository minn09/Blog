import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Posts } from "../entity/Post";

// Obtener todos los posts
export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
    console.log("Intentando obtener posts..."); // Log simple
    const postRepository = AppDataSource.getRepository(Posts);
    const posts = await postRepository.find();
    console.log("Posts obtenidos:", posts); // Log del resultado
    res.json(posts);
  } catch (error) {
    console.error("Error al obtener posts:", error); // Log del error
    res.status(500).json({ message: "Error al obtener posts", error });
  }
};

// Crear un nuevo post
export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const postRepository = AppDataSource.getRepository(Posts);
    const newPost = postRepository.create(req.body);
    const savedPost = await postRepository.save(newPost);
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Error al crear post", error });
  }
};

// Actualizar un post
export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const postRepository = AppDataSource.getRepository(Posts);
    const { id } = req.params;
    const post = await postRepository.findOneBy({ id: parseInt(id) });

    if (!post) {
      res.status(404).json({ message: "Post no encontrado" });
      return;
    }

    postRepository.merge(post, req.body);
    const updatedPost = await postRepository.save(post);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar post", error });
  }
};

// Eliminar un post
export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const postRepository = AppDataSource.getRepository(Posts);
    const { id } = req.params;
    const result = await postRepository.delete(id);

    if (result.affected === 0) {
      res.status(404).json({ message: "Post no encontrado" });
      return;
    }

    res.json({ message: "Post eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar post", error });
  }
};