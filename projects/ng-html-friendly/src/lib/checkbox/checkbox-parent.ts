import { Directive, Output, EventEmitter, OnDestroy, OnInit, Self, ElementRef } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { every } from 'rxjs/operators';
import { Checkbox } from './checkbox';


export class CheckboxParent extends Checkbox {

  private eventListen: Subscription;
  private childChecked = new Map<any, boolean>();

  constructor(element: HTMLInputElement) {
    super(element);
  }

  checkChildChecked() {
    // console.log('size:' + this.childChecked.size);
    if (this.childChecked.size === 0) { this.checkboxHost.checked = false; return; }
    from(this.childChecked)
      .pipe(
        every(ch => ch[1]),
      )
      .subscribe(all => {
        // console.log('all:' + all);
        if (all) { this.checkboxHost.checked = true; } else { this.checkboxHost.checked = false; }
      });
  }

  /** child checkbox 加入控管或更改值時 */
  checkin(key: any, ch: boolean) {
    // console.log('checkin:' + key);
    this.childChecked.set(key, ch);
    this.checkChildChecked();
  }

  /** child checkbox 退出控管 */
  checkout(key: any) {
    // console.log('checkout' + key);
    this.childChecked.delete(key);
    this.checkChildChecked();
  }

  instruction = new EventEmitter<boolean>();

  init(): void {
    // 註冊DOM改變
    this.eventListen = this.eventObservable.subscribe(event => {
      // 發送emit
      this.instruction.emit(this.checkboxHost.checked);
    });
  }

  destroy(): void {
    if (this.eventListen) { this.eventListen.unsubscribe(); }
  }
}
