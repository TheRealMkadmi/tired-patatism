import {Injectable} from '@nestjs/common';
import {BaseService} from "@common/services/BaseService";
import {FormSubmission} from "@/form-submissions/entities/form-submission.entity";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class FormSubmissionsService extends BaseService<FormSubmission>{
    constructor(
        @InjectModel(FormSubmission.name) private readonly formSubmissionModel: Model<FormSubmission>
    ) {
        super(formSubmissionModel);
    }
}
