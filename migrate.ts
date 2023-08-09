import mongoose, { model, Model } from "mongoose";
import { User, UserSchema } from "./src/modules/user/user.schema";

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
  };
}

