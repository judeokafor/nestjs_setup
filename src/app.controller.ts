import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Jude Okafor');
    return this.appService.getHello();
  }

  @Post()
  getHelloMen(): string {
    console.log('Ebuka Nkwalleeee');
    return this.appService.getHello();
  }
}
