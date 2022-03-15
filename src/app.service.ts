import { Injectable ,Dependencies} from '@nestjs/common';
// import Axios from "@nestjs/axios";
import { catchError, map } from 'rxjs/operators';
import {HttpModule , HttpService} from '@nestjs/axios'
import { lastValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(params) {
    return this.httpService
    .get(`http://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lng}&appid=0a1fbec9a6e2b8404d669b2886c9640a`)
    .pipe(
      map((response)=>response.data)
    )
  }
}
