import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    // @InjectRepository(User)
    // private userRepository: Repository<User>,
    private userService: UsersService
  ) {}

  create(createAuthDto: CreateUserDto) {
    return this.userService.create(createAuthDto);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
