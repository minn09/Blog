import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Posts } from "./Post";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number; // ID único

  @Column({ unique: true })
  name!: string; // Nombre del usuario

  @Column({ unique: true })
  email!: string; // Email único del usuario

  @Column()
  password!: string; // Contraseña encriptada (por ahora simple)

  @OneToMany(() => Posts, (posts) => posts.user)
  posts!: Posts[]; // Relación con las publicaciones (un usuario puede tener varios posts)
}
