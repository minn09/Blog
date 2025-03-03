import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./User";

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  post_id!: number; // ID único para el post

  @Column("varchar")
  title!: string; // Título del post

  @Column("text")
  content!: string; // Contenido del post

  @Column("timestamp with time zone", { default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date; // Fecha de creación del post

  @Column("varchar")
  category!: string; // Categoría del post

  @Column("varchar")
  imageUrl!: string; // URL de la imagen del post

  @Column("int")
  readTime!: number; // Tiempo de lectura estimado del post

  @ManyToOne(() => Users, (user) => user.posts)
  @JoinColumn({ name: "user_id" }) // Se usará la columna "user_id" en la BD
  user!: Users;
}
