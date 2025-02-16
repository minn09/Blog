  import express from "express";
  import userRoutes from "./routes/users"; // Ruta correcta hacia tu archivo user.ts
  import postRoutes from "./routes/posts"; // Ruta correcta hacia tu archivo post.ts
  import { AppDataSource } from "./config/data-source";
  
  const app = express();
  const port = 3000;
  
  // Inicializar conexión con la base de datos
  AppDataSource.initialize()
    .then(() => {
      console.log("Conexión exitosa con la base de datos");
    })
    .catch((error) => console.error("Error al conectar a la base de datos:", error));
  
  // Middleware
  app.use(express.json());
  
  // Rutas
  app.use("/api/users", userRoutes); // Todas las rutas de usuarios están bajo /api/users
  app.use("/api/posts", postRoutes); // Todas las rutas de posts están bajo /api/posts
  
  // Iniciar servidor
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
  

