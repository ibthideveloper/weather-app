import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UnsubscribeOnDestroy implements OnDestroy {
  endSubscription$ = new Subject<void>();

  ngOnDestroy(): void {
    this.endSubscription$.next();
    this.endSubscription$.complete();
  }
}
