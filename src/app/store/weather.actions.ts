import { createAction, props } from '@ngrx/store';
import { WeatherResponse } from '../model/weather-response.model';

export const loadWeather = createAction(
  '[Weather] Load Weather',
  props<{ city: string }>()
);

export const loadWeatherSuccess = createAction(
  '[Weather] Load Weather Success',
  props<{ data: WeatherResponse }>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Load Weather Failure',
  props<{ error: any }>()
);
