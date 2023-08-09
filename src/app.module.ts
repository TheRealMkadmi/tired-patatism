import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),

    }),

    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
