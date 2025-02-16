import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Users } from "../entity/User";
import bcrypt from "bcrypt";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["src/entity/*.ts"],
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