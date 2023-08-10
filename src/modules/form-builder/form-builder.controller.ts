import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { CreateFormBuilderDto } from './dto/create-form-builder.dto';
import { UpdateFormBuilderDto } from './dto/update-form-builder.dto';
import { FormBuilder } from '@/form-builder/entities/form-builder.entity';
import { ApiBody } from '@nestjs/swagger';
import { DeleteResultDto } from '@common/dtos/delete-result.dto';
import { FormEventsService } from '@/modules/events/form-events.service';
import { FormSubmissionEventType } from '@/form-builder/constants/form-builder-enums.';

@Controller('form-builder')
export class FormBuilderController {
  constructor(
    private readonly formBuilderService: FormBuilderService,
    private readonly formEventsService: FormEventsService,
  ) {}

  @ApiBody({ type: CreateFormBuilderDto })
  @Post()
  async createForm(
    @Body() createFormBuilderDto: CreateFormBuilderDto,
  ): Promise<FormBuilder> {
    const form = await this.formBuilderService.create(createFormBuilderDto);
    this.formEventsService.emitFormEvent(
      {
        _form: form._id,
      },
      FormSubmissionEventType.CREATED,
    );
    return form;
  }

  @Get()
  findAllForms(): Promise<FormBuilder[]> {
    return this.formBuilderService.find();
  }

  @Get('/by-id/:id')
  findFormById(@Param('id') id: string): Promise<FormBuilder> {
    return this.formBuilderService.findById(id);
  }

  @ApiBody({ type: UpdateFormBuilderDto })
  @Patch(':id')
  async updateForm(
    @Param('id') id: string,
    @Body() updateFormBuilderDto: UpdateFormBuilderDto,
  ): Promise<FormBuilder> {
    const update = await this.formBuilderService.validateLogicAndUpdate(
      id,
      updateFormBuilderDto,
    );
    this.formEventsService.emitFormEvent(
      {
        _form: update._id,
      },
      FormSubmissionEventType.UPDATED,
    );
    return update;
  }

  @Delete(':id')
  async removeForm(@Param('id') id: string): Promise<DeleteResultDto> {
    const result = await this.formBuilderService.deleteById(id);
    if (result.acknowledged) {
      this.formEventsService.emitFormEvent(
        {
          _form: id,
        },
        FormSubmissionEventType.DELETED,
      );
    }
    return result;
  }
}
