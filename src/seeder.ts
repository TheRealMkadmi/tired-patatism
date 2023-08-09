import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@user/user.schema';
import { UserSeeder } from '@user/user.seeder';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

seeder({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
}).run([UserSeeder]);
