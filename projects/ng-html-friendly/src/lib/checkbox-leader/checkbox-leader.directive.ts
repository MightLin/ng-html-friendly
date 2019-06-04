import { Directive, Output, EventEmitter, OnDestroy, OnInit, Self, ElementRef } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { every } from 'rxjs/internal/operators';
import { CheckboxLeaderAbstract } from './checkbox-leader-abstract';

@Directive({
  selector: '[checkbox-leader]',
  exportAs: 'checkbox-leader'
})
export class CheckboxLeaderDirective extends CheckboxLeaderAbstract implements OnInit, OnDestroy {


  private eventListen: Subscription;
  private childChecked = new Map<any, () => boolean>();

  constructor(
    @Self() elementRef: ElementRef,
  ) {
    super(elementRef);
  }

  checkChildChecked() {
    from(this.childChecked)
      .pipe(
        every(ch => ch[1].call([])),
      )
      .subscribe(all => {
        if (all) { this.checkboxHost.checked = true; } else { this.checkboxHost.checked = false; }
      });
  }

  /** child checkbox 加入控管或更改值時 */
  checkin(key: any, ch: () => boolean) {
    console.log(ch);
    this.childChecked.set(key, ch);
    this.checkChildChecked();
  }

  /** child checkbox 退出控管 */
  checkout(key: any) {
    this.childChecked.delete(key);
    this.checkChildChecked();
  }

  @Output() command = new EventEmitter<boolean>();

  ngOnInit(): void {
    // 註冊DOM改變
    this.eventListen = this.eventObservable.subscribe(event => {
      // 發送emit
      this.command.emit(this.checkboxHost.checked);
    });
  }

  ngOnDestroy(): void {
    if (this.eventListen) { this.eventListen.unsubscribe(); }
  }
}
