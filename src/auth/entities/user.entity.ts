import { type } from 'os';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'firstName', type: 'text' })
  firstName: string;

  @Column({ name: 'lastName', type: 'text' })
  lastName: string;

  @Column({ name: 'phone', type: 'text' })
  phone: string;

  @Column({ name: 'email', type: 'text', unique: true })
  email: string;

  @Column({ name: 'birthDay', type: 'text' })
  birthDay: string;

  @Column({ name: 'password', type: 'text' })
  password: string;

  @Column({ name: 'isActive', type: 'bool', default: true })
  isActive: boolean;

  @Column({ name: 'sex', type: 'text' })
  sex: string;

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn()
  role: string;
}

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @OneToMany(() => User, user => user.role)
  users: User[];
}
