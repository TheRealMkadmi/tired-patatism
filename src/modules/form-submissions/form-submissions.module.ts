import { Module } from '@nestjs/common';
import { FormSubmissionsService } from './form-submissions.service';
import { FormSubmissionsController } from './form-submissions.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { FormSubmission, FormSubmissionSchema } from "@/form-submissions/entities/form-submission.entity";
import {FormEventsService} from "@common/services/form-events-service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FormSubmission.name, schema: FormSubmissionSchema }]),
  ],
  controllers: [FormSubmissionsController],
  providers: [FormSubmissionsService, FormEventsService],
})
export class FormSubmissionsModule {}
