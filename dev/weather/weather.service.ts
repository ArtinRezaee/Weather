import {Injectable} from 'angular2/core'
import {Observable} from 'rxjs/Observable'
import {WEATHER_ITEMS} from './weather.data'
import {WeatherItem} from './weather'
import {Http} from 'angular2/http'
import 'rxjs/Rx'

@Injectable()

export class WeatherService{

  constructor(private _http: Http){
  }

  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem : WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any>{
    console.log(cityName)
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
    '&APPID=2f15840a61d12624c77fac8b77a718cc&units=metric')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
      });
  }
}
