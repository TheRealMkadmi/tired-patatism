import mongoose, { model, Model } from "mongoose";
import { User, UserSchema } from "./src/modules/user/user.schema";
import { FormBuilder, FormBuilderSchema } from "./src/modules/form-builder/entities/form-builder.entity";
import { FormSubmission, FormSubmissionSchema } from "./src/modules/form-submissions/entities/form-submission.entity";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default {
  uri: process.env.MONGO_URI!,
  collection: 'migrations',
  migrationsPath: './migrations',
  templatePath: './migrations/template.ts',
  autosync: false,
};


export async function getModels(){


  mongoose.set('strictQuery', true);
  await mongoose.connect(
    process.env.MIGRATE_MONGO_URI ?? process.env.MONGO_URI!,
  );

  return {
    User: model(User.name, UserSchema) as Model<User>,
    FormBuilder: model(FormBuilder.name, FormBuilderSchema) as Model<FormBuilder>,
    FormBuilderSubmission: model(FormSubmission.name, FormSubmissionSchema) as Model<FormSubmission>
  };
}

