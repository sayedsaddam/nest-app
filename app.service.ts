import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getHello(): string{
        return 'Hello, World from App service of root directory.';
    }
}