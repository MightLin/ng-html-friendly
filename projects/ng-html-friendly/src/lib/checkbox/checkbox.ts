import { Self, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

export class Checkbox {
  eventObservable: Observable<Event>;
  // checkboxHost: HTMLInputElement;

  constructor(public checkboxHost: HTMLInputElement,
  ) {
    this.eventObservable = fromEvent(this.checkboxHost, 'change');
  }
}
