import { Self, ElementRef } from "@angular/core";
import { fromEvent, Observable } from "rxjs";

export class CheckboxLeaderAbstract {

  eventObservable: Observable<Event>;
  checkboxHost: HTMLInputElement;

  constructor(
    @Self() elementRef: ElementRef,
  ) {
    this.checkboxHost = elementRef.nativeElement;
    this.eventObservable = fromEvent(this.checkboxHost, 'change');
  }
}
