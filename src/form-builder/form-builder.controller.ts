import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {FormBuilderService} from './form-builder.service';
import {CreateFormBuilderDto} from './dto/create-form-builder.dto';
import {UpdateFormBuilderDto} from './dto/update-form-builder.dto';
import {FormBuilder} from "@/form-builder/entities/form-builder.entity";

@Controller('form-builder')
export class FormBuilderController {
  constructor(private readonly formBuilderService: FormBuilderService) {}

  @Post()
  create(@Body() createFormBuilderDto: CreateFormBuilderDto): Promise<FormBuilder> {
    return this.formBuilderService.create(createFormBuilderDto);
  }

  @Get()
  findAll() : Promise<FormBuilder[]>{
    return this.formBuilderService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FormBuilder> {
    return this.formBuilderService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormBuilderDto: UpdateFormBuilderDto): Promise<FormBuilder> {
    return this.formBuilderService.updateById(id, updateFormBuilderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formBuilderService.deleteById(id);
  }
}
