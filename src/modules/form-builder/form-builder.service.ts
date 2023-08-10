import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '@common/services/BaseService';
import { FormBuilder } from '@/form-builder/entities/form-builder.entity';
import { Model } from 'mongoose';
import { FormSubmission } from '@/form-submissions/entities/form-submission.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateFormBuilderDto } from '@/form-builder/dto/update-form-builder.dto';

@Injectable()
export class FormBuilderService extends BaseService<FormBuilder> {
  constructor(
    @InjectModel(FormBuilder.name)
    private readonly formBuilderModel: Model<FormBuilder>,
    @InjectModel(FormSubmission.name)
    private readonly formSubmissionModel: Model<FormSubmission>,
  ) {
    super(formBuilderModel);
  }

  async validateLogicAndUpdate(
    id: string,
    updateFormSubmissionDto: UpdateFormBuilderDto,
  ): Promise<FormBuilder> {
    // if the form have some answers, it can't be updated the old values only you can add new values
    // it make sense in my stupid mind
    const form = await this.formBuilderModel.findById(id);
    if (!form) throw new BadRequestException('Form not found');
    const formSubmissions = await this.formSubmissionModel.find({
      form: form?._id,
    });
    if (formSubmissions.length === 0) {
      return super.updateById(id, updateFormSubmissionDto);
    } else {
      throw new BadRequestException('You done goofed');
    }
  }
}
