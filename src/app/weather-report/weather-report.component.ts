import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city.models';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  data$: Observable<any> | undefined;
  today: Date = new Date();
  cityPlace: City = {
    city: 'Salerno',
    isoCountryCode: 'it'
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.data$ = this.weatherService.getWeatherForCity(this.cityPlace);
  }

}
