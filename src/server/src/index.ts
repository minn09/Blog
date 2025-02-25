import "reflect-metadata";
import "dotenv/config";
import express from "express";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import { AppDataSource } from "./data-source";
import { Users } from "./entitites/User";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;

// Inicializar conexión con la base de datos
AppDataSource.initialize()
  .then(async () => {
    console.log("Conexión exitosa con la base de datos");

    // Crear usuario predeterminado si no existe
    const userRepository = AppDataSource.getRepository(Users);
    const defaultUser = await userRepository.findOneBy({
      name: process.env.DEFAULT_USER,
    });

    if (!defaultUser) {
      const defaultPassword = process.env.DEFAULT_PASSWORD;
      if (!defaultPassword) {
        throw new Error('DEFAULT_PASSWORD environment variable is not defined');
      }
      const hashedPassword = await bcrypt.hash(defaultPassword, 10);
      const newUser = userRepository.create({
        name: process.env.DEFAULT_USER,
        email: process.env.DEFAULT_EMAIL,
        password: hashedPassword,
      });
      await userRepository.save(newUser);
      console.log("Usuario predeterminado creado");
    } else {
      console.log("Usuario predeterminado ya existe");
    }

    // Middleware
    app.use(express.json());

    // Rutas
    app.use("/api/users", userRoutes);
    app.use("/api/posts", postRoutes);

    // Iniciar servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Error al conectar a la base de datos:", error));