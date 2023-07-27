import { Controller, Get, Inject } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController{
    constructor(@Inject("UserService") private readonly userService : UserService,
    ){}

    @Get()
    findUser(){
        return this.userService.findUser();
    }
}