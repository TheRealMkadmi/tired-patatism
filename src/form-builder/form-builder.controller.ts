import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { CreateFormBuilderDto } from './dto/create-form-builder.dto';
import { UpdateFormBuilderDto } from './dto/update-form-builder.dto';

@Controller('form-builder')
export class FormBuilderController {
  constructor(private readonly formBuilderService: FormBuilderService) {}

  @Post()
  create(@Body() createFormBuilderDto: CreateFormBuilderDto) {
    return this.formBuilderService.create(createFormBuilderDto);
  }

  @Get()
  findAll() {
    return this.formBuilderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formBuilderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormBuilderDto: UpdateFormBuilderDto) {
    return this.formBuilderService.update(+id, updateFormBuilderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formBuilderService.remove(+id);
  }
}
