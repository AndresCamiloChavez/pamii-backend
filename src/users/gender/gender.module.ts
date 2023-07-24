import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gender } from './entities/gender.entity';

@Module({
  controllers: [GenderController],
  providers: [GenderService],
  imports: [GenderModule, TypeOrmModule.forFeature([Gender])],
  exports: [TypeOrmModule],
})
export class GenderModule {}
