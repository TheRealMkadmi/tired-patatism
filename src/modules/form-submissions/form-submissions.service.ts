import {BadRequestException, Injectable} from '@nestjs/common';
import {BaseService} from "@common/services/BaseService";
import {FormSubmission} from "@/form-submissions/entities/form-submission.entity";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {UpdateFormSubmissionDto} from "@/form-submissions/dto/update-form-submission.dto";

@Injectable()
export class FormSubmissionsService extends BaseService<FormSubmission>{
    constructor(
        @InjectModel(FormSubmission.name) private readonly formSubmissionModel: Model<FormSubmission>
    ) {
        super(formSubmissionModel);
    }

    async updateById(id: string, updateFormSubmissionDto: UpdateFormSubmissionDto): Promise<FormSubmission> {
      // Validation
      if(true) {
        return super.updateById(id, updateFormSubmissionDto);
      } else {
        throw new BadRequestException('You done goofed');
      }
    }
}
