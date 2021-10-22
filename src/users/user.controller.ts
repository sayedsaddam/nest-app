import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get()
    getUsers(){
        return 'All users';
    }
    @Post()
    insertUser(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ){
        const userId = this.userService.insertUser(name, age, surname, email);
        return { userId };
    }

    @Get()
    getAllUsers(){
        return this.userService.getAllUsers(); 
    }

    @Get(':userId')
    getUser(
        @Param('userId') userId: string
    ){
        return this.userService.getUser(userId);
    }

    @Put(':userId')
    updateUser(
        @Param('userId') userId: string,
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ){
        return this.userService.updateUser(userId, name, age, surname, email);
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userId: string){
         this.userService.deleteUser(userId);
    }
}