import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../model/weather-response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData$: Observable<WeatherResponse> = new Observable<WeatherResponse>();
  weatherForm: FormGroup = this.fb.group({
    city: ['', Validators.required],
  });
  todayDate!: Date;
  weatherError$: Observable<any> = new Observable<any>();

  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.todayDate = new Date();
  }

  getWeather() {
    const city = this.weatherForm.get('city')?.value;
    this.weatherService.getWeather(city);
    this.weatherData$ = this.weatherService.loadSelectedWeather();
    this.weatherError$ = this.weatherService.getDataError();
  }

  transformTemperature(value: number): number {
    return Math.round(value);
  }

  get cityName() {
    return this.weatherForm.get('city')?.value;
  }
}
