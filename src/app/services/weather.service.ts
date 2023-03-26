import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { City } from '../models/city.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForCity(cityPlace: City): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${cityPlace.city},${cityPlace.isoCountryCode}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get<any>(path).pipe(
      map(data => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      })),
      delay(500)
    );
  }
}
