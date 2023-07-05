import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'fullName', type: 'text'})
    fullName: string;

    @Column({ name: 'phone', type: 'text'})
    phone: string;

    @Column({ name: 'email', type: 'text', unique: true })
    email: string;

    @Column({ name: 'birthDay', type: 'text'})
    birthDay: string;

    @Column({ name: 'isActive', type: 'bool', default: true})
    isActive: string;
    
    @Column({ name: 'sex', type: 'text', default: true})
    sex: string;

}
