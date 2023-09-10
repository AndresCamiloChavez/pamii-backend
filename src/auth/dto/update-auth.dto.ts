import { PartialType } from '@nestjs/mapped-types';
<<<<<<< HEAD
import { CreateUserDto } from './create-user.dto';
=======
import { CreateUserDto } from '../../users/dto/create-user.dto';
>>>>>>> 204d7586d5d130849715573f16bb2775d0e033e3

export class UpdateAuthDto extends PartialType(CreateUserDto) {}
