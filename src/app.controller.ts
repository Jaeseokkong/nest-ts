import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { IUserInfo, UserInfo } from './types/user.type';
import { UserInfoDto, UserQueryIdDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("something")
  somethingLogicUser(@Query() query : UserQueryIdDto) {
    const payload = UserQueryIdDto.Req(query);

    const result = this.appService.somethingLogicToUser(payload);

    return UserQueryIdDto.Res(result);
  }



  @Get()
  getHello(@Query("ID") ID : number): string {
    console.log(ID, typeof ID)
    return this.appService.getHello();
  }


  @Post()
  getUserInfo(@Body() body : IUserInfo){
    const payload = UserInfo.Request(body);
    console.log(payload, typeof payload.age)
    return this.appService.getHello()
  }

  @Post("dto")
  @UsePipes(new ValidationPipe({ transform : true}))
  getUserInfoByDto(@Body() body: UserInfoDto){
    console.log(body, typeof body.age)
    return this.appService.getHello()
  }

}
