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
  user_id!: number;

  @Column("varchar", { unique: true })
  username!: string;

  @Column("varchar", { unique: true })
  email!: string;

  @Column("varchar")
  password!: string;

  @OneToMany(() => Posts, (posts: Posts) => posts.user)
  posts!: Posts[];
}
