import {Prop} from "@nestjs/mongoose";

export class SubmissionField {
    @Prop({ required: true, type: String })
    key: string;
    @Prop({ required: true, type: String })
    value: string;
}
