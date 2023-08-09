import { Injectable } from '@nestjs/common';
import { CreateFormBuilderDto } from './dto/create-form-builder.dto';
import { UpdateFormBuilderDto } from './dto/update-form-builder.dto';

@Injectable()
export class FormBuilderService {
  create(createFormBuilderDto: CreateFormBuilderDto) {
    return 'This action adds a new formBuilder';
  }

  findAll() {
    return `This action returns all formBuilder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formBuilder`;
  }

  update(id: number, updateFormBuilderDto: UpdateFormBuilderDto) {
    return `This action updates a #${id} formBuilder`;
  }

  remove(id: number) {
    return `This action removes a #${id} formBuilder`;
  }
}
