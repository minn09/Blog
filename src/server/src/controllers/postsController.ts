import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Posts } from "../entitites/Post";
import { Users } from "../entitites/User";

// Obtener todos los posts
export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
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
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
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

    const postData = req.body;
  
    // Get user (default or specified)
    const user_id = postData.userId || 1;
    const user = await userRepository.findOneBy({ user_id });
    
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Validate and normalize readTime
    const readTime = postData.readTime !== undefined ? parseInt(postData.readTime) : 0;
    if (isNaN(readTime)) {
      res.status(400).json({ message: "readTime must be a valid number" });
      return;
    }
    postData.readTime = readTime;

    // Create and save post with user relationship and current timestamp
    const newPost = postRepository.create({
      ...postData,
      user: user,
      created_at: new Date()
    });
    
    await postRepository.save(newPost);
    
    // Fetch the saved post with user relationship
    const savedPost = await postRepository.findOne({
      where: { post_id: newPost.post_id },
      relations: ["user"]
    });
    
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
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
    const postId = parseInt(id);
    
    if (isNaN(postId)) {
      res.status(400).json({ message: "Invalid post ID" });
      return;
    }

    const post = await postRepository.findOneBy({ post_id: postId });
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // Validate and normalize readTime if provided
    if (req.body.readTime !== undefined) {
      const readTime = parseInt(req.body.readTime);
      if (isNaN(readTime)) {
        res.status(400).json({ message: "readTime must be a valid number" });
        return;
      }
      req.body.readTime = readTime;
    }

    postRepository.merge(post, req.body);
    const updatedPost = await postRepository.save(post);
    
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
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
    const postId = parseInt(id);

    if (isNaN(postId)) {
      res.status(400).json({ message: "Invalid post ID" });
      return;
    }

    const post = await postRepository.findOneBy({ post_id: postId });
    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    await postRepository.remove(post);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
};