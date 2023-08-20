import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { WeatherResponse } from '../model/weather-response.model';

export interface WeatherState {
  data: WeatherResponse;
  loading: boolean;
  error: any;
}

const initialState: WeatherState = {
  data: null as unknown as WeatherResponse,
  loading: false,
  error: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, (state) => ({ ...state, loading: true })),
  on(WeatherActions.loadWeatherSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null,
  })),
  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({
    ...state,
    data: null as unknown as WeatherResponse,
    loading: false,
    error,
  }))
);
