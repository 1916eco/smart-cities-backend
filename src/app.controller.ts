import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':lat/:lng')
  getWeather(@Param() params){
    return this.appService.getWeather(params);
  }
  @Get('/airQuality/:lat/:lng')
  getAirQuality(@Param() params){
    return this.appService.getAirQuality(params);
  }

  @Get('/cars')
  getCars(){
    return this.appService.getCars();
  }
  @Get('/recycle')
  getRecycle(){
    return this.appService.getRecycle();
  }
  @Get('/bus')
  getBus(){
    return this.appService.getBus();
  }
}
