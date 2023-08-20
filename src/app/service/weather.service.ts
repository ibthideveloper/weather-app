import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { loadWeather } from '../store/weather.actions';
import { WeatherState } from '../store/weather.reducers';
import {
  selectWeatherData,
  selectWeatherError,
} from '../store/weather.selectors';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.weatherAPIKey;
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient, private store: Store<WeatherState>) {}

  getHttpWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeather(inputCity: string) {
    this.store.dispatch(loadWeather({ city: inputCity }));
  }

  loadSelectedWeather() {
    return this.store.pipe(select(selectWeatherData));
  }

  getDataError() {
    return this.store.pipe(select(selectWeatherError));
  }
}
