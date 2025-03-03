import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Posts } from "../entitites/Post";
import { Users } from "../entitites/User";

// Obtener todos los posts
export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
    console.log("Intentando obtener posts..."); // Log simple
    const postRepository = AppDataSource.getRepository(Posts);
    const posts: Posts[] = await postRepository.find({
      select: {
        post_id: true,
        title: true,
        content: true,
        category: true,
        imageUrl: true,
        readTime: true,
        user_id: true
      }
    });
    
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
    const userRepository = AppDataSource.getRepository(Users);
    
    // Validate and prepare post data
    const postData = { ...req.body };
    
    // Get user (default or specified)
    const userId = postData.user_id || 1;
    const user = await userRepository.findOneBy({ user_id: userId });
    
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    // Handle readTime validation
    if (postData.readTime === '' || postData.readTime === undefined || postData.readTime === null) {
      postData.readTime = 0;
    } else {
      const readTime = parseInt(postData.readTime);
      if (isNaN(readTime)) {
        res.status(400).json({ message: "readTime must be a valid number" });
        return;
      }
      postData.readTime = readTime;
    }

    // Create and save post with user relationship
    const newPost = postRepository.create({
      ...postData,
      user: user
    });
    
    await postRepository.save(newPost);
    
    // Fetch the saved post with user relationship
    const savedPost = await postRepository.findOne({
      where: { post_id: newPost.post_id },
      relations: ["user"]
    });
    
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
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
    const post = await postRepository.findOneBy({ post_id: parseInt(id) });

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