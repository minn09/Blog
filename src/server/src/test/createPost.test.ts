import { AppDataSource } from "../data-source";
import { Posts } from "../entitites/Post";
import { Users } from "../entitites/User";

async function createTestPost() {
  const postRepository = AppDataSource.getRepository(Posts);
  const userRepository = AppDataSource.getRepository(Users);

  // Buscar el usuario con ID 1
  const defaultUser = await userRepository.findOneBy({ user_id: 1 });
  if (!defaultUser) {
    console.error("Error: No existe un usuario con ID 1.");
    process.exit(1);
  }

  // Crear el nuevo post asignándole el usuario predeterminado
  const newPost = postRepository.create({
    title: "Post de prueba con relación de usuario",
    content: "Este es un post creado como prueba.",
    category: "Test",
    imageUrl: "https://example.com/test-image.jpg",
    readTime: 3,
    user: defaultUser, // Asignamos el objeto completo
  });

  await postRepository.save(newPost);
  console.log("✅ Post de prueba creado con éxito.");

  // Recuperar el post creado con la relación de usuario
  const savedPost = await postRepository.findOne({
    where: { post_id: newPost.post_id },
    relations: ["user"],
  });

  console.log("📌 Post guardado con relación de usuario:", savedPost);
  process.exit(0);
}

AppDataSource.initialize()
  .then(() => createTestPost())
  .catch((err) => {
    console.error("❌ Error al ejecutar la prueba:", err);
    process.exit(1);
  });
