import { Component,Injectable} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, NgIf, CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  zip: string = '';
  // state: string = '';
  country: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    console.log('called')
    this.weatherService.getWeather(this.zip, this.country).subscribe((data: any) => {
        this.weatherData = data;
        console.log('data',data)
      }, (error) => {
        console.error('Error fetching weather data:', error);
      });
  }
}

