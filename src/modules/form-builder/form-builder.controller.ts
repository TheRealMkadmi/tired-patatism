import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {FormBuilderService} from './form-builder.service';
import {CreateFormBuilderDto} from './dto/create-form-builder.dto';
import {UpdateFormBuilderDto} from './dto/update-form-builder.dto';
import {FormBuilder} from "@/form-builder/entities/form-builder.entity";
import { ApiBody } from '@nestjs/swagger';
import {DeleteResultDto} from "@common/dtos/delete-result.dto";

@Controller('form-builder')
export class FormBuilderController {
  constructor(private readonly formBuilderService: FormBuilderService) {}

  @ApiBody({ type: CreateFormBuilderDto })
  @Post()
  createForm(
    @Body() createFormBuilderDto: CreateFormBuilderDto,
  ): Promise<FormBuilder> {
    return this.formBuilderService.create(createFormBuilderDto);
  }

  @Get()
  findAllForms(): Promise<FormBuilder[]> {
    return this.formBuilderService.find();
  }

  @Get(':id')
  findFormById(@Param('id') id: string): Promise<FormBuilder> {
    return this.formBuilderService.findById(id);
  }

  @ApiBody({ type: UpdateFormBuilderDto })
  @Patch(':id')
  updateForm(
    @Param('id') id: string,
    @Body() updateFormBuilderDto: UpdateFormBuilderDto,
  ): Promise<FormBuilder> {
    return this.formBuilderService.validateLogicAndUpdate(
      id,
      updateFormBuilderDto,
    );
  }

  @Delete(':id')
  removeForm(@Param('id') id: string): Promise<DeleteResultDto> {
    return this.formBuilderService.deleteById(id);
  }
}
