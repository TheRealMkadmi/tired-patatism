import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@user/user.schema';
import { UserSeeder } from '@user/user.seeder';
import { FormBuilderSeeder } from './modules/form-builder/form.seeder';
import { FormBuilder, FormBuilderSchema } from './modules/form-builder/entities/form-builder.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// DRY DRY DRY 
function seedModel(modelName: string, modelSchema: any, modelSeeder: any) {
  seeder({
    imports: [
      MongooseModule.forRoot(process.env.MONGO_URI!),
      MongooseModule.forFeature([{ name: modelName, schema: modelSchema }]),
    ],
  }).run([modelSeeder]);
}

seedModel(User.name, UserSchema, UserSeeder);
seedModel(FormBuilder.name, FormBuilderSchema, FormBuilderSeeder);
