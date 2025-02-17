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
  id!: number;
  
  @Column("varchar", { unique: true })
  name!: string;
  
  @Column("varchar", { unique: true })
  email!: string;
  
  @Column("varchar")
  password!: string;
  
  @OneToMany(() => Posts, (posts) => posts.user)
  posts!: Posts[];
}
