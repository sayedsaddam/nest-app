import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(userService: UserService){}

    @Get()
    getUsers(){
        return 'All users';
    }
}