import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducers';

const selectWeatherState =
  createFeatureSelector<WeatherState>('weatherReducer');

export const selectWeatherData = createSelector(
  selectWeatherState,
  (state) => state.data
);

export const selectWeatherLoading = createSelector(
  selectWeatherState,
  (state) => state.loading
);

export const selectWeatherError = createSelector(
  selectWeatherState,
  (state) => state.error
);
