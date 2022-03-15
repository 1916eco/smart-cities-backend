import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':lat/:lng')
  getHello(@Param() params){
    return this.appService.getHello(params);
  }
}
