import { Directive, Output, EventEmitter, OnDestroy, OnInit, Self, ElementRef } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { every } from 'rxjs/operators';
import { CheckboxParent } from '../checkbox/checkbox-parent';

@Directive({
  selector: '[checkbox-leader]',
  exportAs: 'checkbox-leader'
})
export class CheckboxLeaderDirective extends CheckboxParent implements OnInit, OnDestroy {

  constructor(
    @Self() elementRef: ElementRef,
  ) {
    super(elementRef.nativeElement);
  }

  @Output() command = this.instruction;

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
