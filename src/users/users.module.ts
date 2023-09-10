import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { GenderModule } from './gender/gender.module';
import { Gender } from './gender/entities/gender.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { GenderService } from './gender/gender.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, GenderService],
  imports: [GenderModule, TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
