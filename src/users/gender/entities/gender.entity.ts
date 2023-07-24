import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // Puede ser 'masculino', 'femenino', 'no binario', etc.
  
  @OneToOne(() => User, user => user.gender)
  user: User;
}