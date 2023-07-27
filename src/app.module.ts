import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserServiceImpl } from './user.service.v3';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, {provide : "UserService", useClass : UserServiceImpl}],
})
export class AppModule {}
