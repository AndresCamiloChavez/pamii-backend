import { type } from 'os';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gender } from '../gender/entities/gender.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'fullName', type: 'text' })
  fullName: string;

  @Column({ name: 'phone', type: 'text' })
  phone: string;

  @Column({ name: 'password', type: 'text', select: false }) // cuando se realiza un find no obtiene la contraseña
  password: string;

  @Column({ name: 'email', type: 'text', unique: true })
  email: string;

  @Column({ name: 'birthDay', type: 'text' })
  birthDay: string;

  @Column({ name: 'isActive', type: 'bool', default: true })
  isActive: string;

  // Relación Uno a Uno con Gender
  @OneToOne(() => Gender, (gender) => gender.user, { cascade: true })
  @JoinColumn()
  gender: Gender;
}
