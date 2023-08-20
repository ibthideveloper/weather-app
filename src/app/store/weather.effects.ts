import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as WeatherActions from './weather.actions';
import { WeatherService } from '../service/weather.service';

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeather),
      mergeMap(({ city }) =>
        this.weatherService.getHttpWeather(city).pipe(
          map((data) => WeatherActions.loadWeatherSuccess({ data })),
          catchError((error) =>
            of(WeatherActions.loadWeatherFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
