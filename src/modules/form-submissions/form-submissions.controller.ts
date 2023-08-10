import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormSubmissionsService } from './form-submissions.service';
import { CreateFormSubmissionDto } from './dto/create-form-submission.dto';
import { UpdateFormSubmissionDto } from './dto/update-form-submission.dto';
import {FormSubmission} from "@/form-submissions/entities/form-submission.entity";
import { ApiBody } from '@nestjs/swagger';
import {DeleteResultDto} from "@common/dtos/delete-result.dto";

@Controller('form-submissions')
export class FormSubmissionsController {
  constructor(
    private readonly formSubmissionsService: FormSubmissionsService,
  ) {}

  @ApiBody({ type: CreateFormSubmissionDto })
  @Post()
  create(
    @Body() createFormSubmissionDto: CreateFormSubmissionDto,
  ): Promise<FormSubmission> {
    return this.formSubmissionsService.create(createFormSubmissionDto);
  }

  @Get()
  findAll(): Promise<FormSubmission[]> {
    return this.formSubmissionsService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FormSubmission> {
    return this.formSubmissionsService.findById(id);
  }

  @ApiBody({ type: UpdateFormSubmissionDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormSubmissionDto: UpdateFormSubmissionDto,
  ): Promise<FormSubmission> {
    return this.formSubmissionsService.updateById(id, updateFormSubmissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResultDto> {
    return this.formSubmissionsService.deleteById(id);
  }
}
