import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, User } from './entities/user.entity';
=======
import { UsersModule } from 'src/users/users.module';
>>>>>>> 204d7586d5d130849715573f16bb2775d0e033e3

@Module({
  controllers: [AuthController],
  providers: [AuthService],
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forFeature([User,Role]),
  ],
  exports: [
    TypeOrmModule
  ]
=======
  imports: [UsersModule],
  // exports: [TypeOrmModule],
>>>>>>> 204d7586d5d130849715573f16bb2775d0e033e3
})
export class AuthModule {}
