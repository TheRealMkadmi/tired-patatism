import { Module } from '@nestjs/common';
import { FormSubmissionsService } from './form-submissions.service';
import { FormSubmissionsController } from './form-submissions.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {FormSubmission, FormSubmissionSchema} from "@/form-submissions/entities/form-submission.entity";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                schema: FormSubmissionSchema,
                name: FormSubmission.name,
            }
        ])
    ],
  controllers: [FormSubmissionsController],
  providers: [FormSubmissionsService],
})
export class FormSubmissionsModule {
}
