import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import {Document} from "mongoose";
import {FormBuilder} from "@/form-builder/entities/form-builder.entity";

@Schema({
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
})
export class FormSubmission extends Document {
    declare _id: string;
    @Prop({ type: String, ref: FormBuilder.name, required: true })
    _form: string;

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
