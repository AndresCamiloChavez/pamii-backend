import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenderService {
  private readonly logger = new Logger('GenderService');

  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>,
  ) {}

  create(createGenderDto: CreateGenderDto) {
    return 'This action adds a new gender';
  }

  findAll() {
    return `This action returns all gender`;
  }

  async findOne(id: number) {
    let gender = await this.genderRepository.findOneBy({ id: id });
    if (!gender) throw new NotFoundException(`No existe un género por ${id}`);
    return gender;
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return `This action updates a #${id} gender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }

  async findOrCreateGender(genderType: string): Promise<Gender> {
    // Verificar si el género ya existe en la base de datos
    let gender = await this.genderRepository.findOne({
      where: { type: genderType },
    });

    if (!gender) {
      throw new NotFoundException(`No existe un genero ${genderType}`);
    }

    return gender;
  }
}
