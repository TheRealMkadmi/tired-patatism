import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { classes } from '@automapper/classes';
import { MongooseModule } from "@nestjs/mongoose";
import { AutomapperModule } from "@timonmasberg/automapper-nestjs";
import { FormSubmissionsModule } from "@/form-submissions/form-submissions.module";
import { FormBuilderModule } from "@/form-builder/form-builder.module";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),

    UserModule,
    FormSubmissionsModule,
    FormBuilderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
