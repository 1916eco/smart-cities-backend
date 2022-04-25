import { Injectable ,Dependencies} from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import {HttpModule , HttpService} from '@nestjs/axios'
import { lastValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getWeather(params) {
    return this.httpService
    .get(`http://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lng}&appid=`+process.env.OPENWEATHERMAPAPIKEY)
    .pipe(
      map((response)=>response.data)
    )
  }
//https://services5.arcgis.com/0sktPVp3t1LvXc9z/arcgis/rest/services/Recycling_Centres/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json

  getCars() {
    return this.httpService
    .get(`https://chargepoints.dft.gov.uk/api/retrieve/registry/lat/57.148/long/-2.108/dist/10/format/json/`)
    .pipe(
      map((response)=>response.data)
    )
  }

  getRecycle() {
    return this.httpService
    .get(process.env.BASIC_LINK+`/0sktPVp3t1LvXc9z/arcgis/rest/services/Recycling_Centres/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
    .pipe(
      map((response)=>response.data)
    )
  }
  getBus() {
    return this.httpService
    .get(process.env.BASIC_LINK+`/0sktPVp3t1LvXc9z/arcgis/rest/services/Bus_Facilities/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
    .pipe(
      map((response)=>response.data)
    )
  }
  getAirQuality(params) {
    return this.httpService
    .get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${params.lat}&lon=${params.lng}&appid=`+process.env.OPENWEATHERMAPAPIKEY)
    .pipe(
      map((response)=>response.data)
    )
  }
}