import {BadRequestException, Injectable} from '@nestjs/common';
import {BaseService} from "@common/services/BaseService";
import {FormBuilder} from "@/form-builder/entities/form-builder.entity";
import {Model} from "mongoose";
import {UpdateFormSubmissionDto} from "@/form-submissions/dto/update-form-submission.dto";
import {FormSubmission} from "@/form-submissions/entities/form-submission.entity";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class FormBuilderService extends BaseService<FormBuilder>{
  constructor(
      @InjectModel(FormBuilder.name) private readonly formBuilderModel: Model<FormBuilder>
  ) {
    super(formBuilderModel);
  }

  async validateLogicAndUpdate(id: string, updateFormSubmissionDto: UpdateFormSubmissionDto): Promise<FormSubmission> {
    // Validation
    if(1 === 1) {
      return super.updateById(id, updateFormSubmissionDto);
    } else {
      throw new BadRequestException('You done goofed');
    }
  }
}
