import { AppDataSource } from "../data-source";
import { QueryRunner } from "typeorm";

async function dropTables() {
  try {
    // Inicializa la conexión
    await AppDataSource.initialize();
    console.log("Connected to database.");

    const queryRunner: QueryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect(); // Aseguramos la conexión del QueryRunner

    console.log("Dropping tables...");
    await queryRunner.query("DROP TABLE IF EXISTS posts CASCADE;");
    await queryRunner.query("DROP TABLE IF EXISTS users CASCADE;");
    console.log("Tables 'posts' and 'users' have been deleted.");

    // Liberar el QueryRunner
    await queryRunner.release();
  } catch (error) {
    console.error("Error dropping tables:", error);
  } finally {
    try {
      await AppDataSource.destroy();
      console.log("Database connection closed.");
    } catch (err) {
      console.warn("Error during destroy (can be ignored if connection is already closed):", err);
    }
    process.exit(0);
  }
}

dropTables();
