import {Component, Input} from 'angular2/core';
import {WeatherItem} from './weather'

@Component({
    selector: 'weather-item',
    templateUrl:'app/weather/weather-item.component.html',
    styleUrls: ['src/css/weather-item.css']
})

export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem
}
