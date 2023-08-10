import { Module } from '@nestjs/common';
import { FormBuilderService } from './form-builder.service';
import { FormBuilderController } from './form-builder.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { FormBuilder, FormBuilderSchema } from "@/form-builder/entities/form-builder.entity";
import { FormSubmission, FormSubmissionSchema } from "@/form-submissions/entities/form-submission.entity";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormBuilder.name, schema: FormBuilderSchema },
      { name: FormSubmission.name, schema: FormSubmissionSchema }
    ]),
  ],
  controllers: [FormBuilderController],
  providers: [FormBuilderService],
})
export class FormBuilderModule {}
