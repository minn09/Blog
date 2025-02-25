import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Users } from "./User";

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id!: number; // ID único para el post

  @Column("varchar")
  title!: string; // Título del post

  @Column("text")
  content!: string; // Contenido del post

  @Column("datetime")
  createdAt!: Date; // Fecha de creación del post

  @Column("varchar")
  category!: string; // Categoría del post

  @Column()
  imageUrl!: string; // URL de la imagen del post

  @Column("int")
  readTime!: number; // Tiempo de lectura estimado del post

  @ManyToOne(() => Users, (users) => users.posts)
  user!: Users; // Relación: un post pertenece a un usuario
}
