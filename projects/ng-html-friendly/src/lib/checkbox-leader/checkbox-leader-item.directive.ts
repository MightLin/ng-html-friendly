import { Directive, Input, OnInit, OnDestroy, Self, ElementRef, HostListener, Output, AfterViewChecked } from '@angular/core';
import { CheckboxLeaderDirective } from './checkbox-leader.directive';
import { Subscription } from 'rxjs';
import { CheckboxChild } from '../checkbox/checkbox-child';
import { CheckboxParent } from '../checkbox/checkbox-parent';

@Directive({
  selector: '[checkbox-leader-item]'
})
export class CheckboxLeaderItemDirective extends CheckboxChild implements OnInit, OnDestroy, AfterViewChecked {


  @Input('checkbox-leader-item')
  set leader(value: CheckboxParent) {
    this.parent = value;
  }
  get leader() {
    return this.parent;
  }

  constructor(
    @Self() elementRef: ElementRef,
  ) {
    super(elementRef.nativeElement);
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked')
    this.detectChanges();
  }

  ngOnDestroy(): void {
    this.destory();
  }


}
