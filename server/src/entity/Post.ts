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

  @Column()
  title!: string; // Título del post

  @Column("text")
  content!: string; // Contenido del post

  @ManyToOne(() => Users, (users) => users.posts)
  user!: Users; // Relación: un post pertenece a un usuario
}
