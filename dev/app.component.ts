import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component"
@Component({
    selector: 'my-app',
    template: `
        <header>
            <img src="CLOUDS/logo.jpg" height=200; align="right" style="float: right">
            <h1 style="padding: 0px 0px 0px 200px">Forecast</h1>
        </header>
        <weather-search></weather-search>
        <weather-list></weather-list>
    `,
    directives: [WeatherListComponent, WeatherSearchComponent]
})
export class AppComponent {
}
