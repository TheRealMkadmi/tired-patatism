import { Module } from '@nestjs/common';
import { FormSubmissionsService } from './form-submissions.service';
import { FormSubmissionsController } from './form-submissions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FormSubmission,
  FormSubmissionSchema,
} from '@/form-submissions/entities/form-submission.entity';
import { FormEventsModule } from '@/modules/events/form-events.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormSubmission.name, schema: FormSubmissionSchema },
    ]),
    FormEventsModule,
  ],
  controllers: [FormSubmissionsController],
  providers: [FormSubmissionsService],
})
export class FormSubmissionsModule {}
