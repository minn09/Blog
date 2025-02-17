import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Users } from "./entitites/User";
import { Posts } from "./entitites/Post";

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a la base de datos establecida");

    // Crear un nuevo usuario
    const userRepository = AppDataSource.getRepository(Users);
    const newUser = userRepository.create({
      name: "John Doe1",
      email: "john1@example.com",
      password: "123456",
    });
    await userRepository.save(newUser);
    console.log("Nuevo usuario creado:", newUser);

    // Crear un nuevo post
    const postRepository = AppDataSource.getRepository(Posts);
    const newPost = postRepository.create({
      title: "Mi primer post",
      content: "Este es el contenido de mi primer post",
      user: newUser,
    });
    await postRepository.save(newPost);
    console.log("Nuevo post creado:", newPost);
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
  }
};

main();
