import {Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
})
export class FormSubmission extends Document {
    declare _id: string;
}


export const FormSubmissionSchema =
    SchemaFactory.createForClass(FormSubmission);
