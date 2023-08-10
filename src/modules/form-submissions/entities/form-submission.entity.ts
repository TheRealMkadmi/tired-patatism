import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { FormBuilder } from '@/form-builder/entities/form-builder.entity';
import { SubmissionField } from '@/form-submissions/entities/submission-field';

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class FormSubmission extends Document {
  declare _id: string;
  @Prop({ type: String, ref: FormBuilder.name, required: true })
  _form: string;

  @Prop({ type: Types.Array })
  submissionFields: SubmissionField[];

  declare form: FormBuilder;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export const FormSubmissionSchema = SchemaFactory.createForClass(FormSubmission);

FormSubmissionSchema.virtual('form', {
    ref: FormBuilder.name,
    localField: '_form',
    foreignField: '_id',
    justOne: true,
});
