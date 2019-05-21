import { Directive, Self, ElementRef } from '@angular/core';

@Directive({
  selector: '[checkHeaderContainer]',
  exportAs: 'checkHeaderContainer'
})
export class CheckboxHeaderContainerDirective {


  nativeElement: any;

  constructor(
    @Self() elementRef: ElementRef,
  ) {
    this.nativeElement = elementRef.nativeElement;
  }

}
