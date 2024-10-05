import { UserService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getHello(): string {
        return this.userService.getHello();
    }
}
