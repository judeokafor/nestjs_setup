import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Jude man oga mi sir test!';
  }

  getHelloMen(): string {
    return 'Hello World Jude man oga mi sir test, Yes Sir!';
  }
}
