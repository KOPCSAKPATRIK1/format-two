import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { PhoneDto } from './phone.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }

  @Post()
  @Render('phone')
  handleColor(@Body() body: PhoneDto): object {
    return body;
  }
}
