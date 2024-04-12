import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeather(zip: string, country: string) {
    const apiKey = '204becff60580eb3a47e8ce5b5ff0a33';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}&units=imperial`;
    return this.http.get(apiUrl);
  }
}