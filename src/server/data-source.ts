import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entitites/User";
import { Posts } from "./entitites/Post";
import { config } from "./config/config";
import { validateEnv } from "./utils/validateEnv";
import bcrypt from "bcrypt";

// Validate environment variables before creating the connection
validateEnv();

export const AppDataSource = new DataSource({
  type: "postgres",
  ...config.database,
  synchronize: true,
  logging: true,
  entities: [Users, Posts],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection established");

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
    
  })
  .catch((error) => console.error("Error al conectar a la base de datos:", error));