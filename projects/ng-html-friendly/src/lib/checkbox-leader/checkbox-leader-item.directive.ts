import { Directive, Input, OnInit, OnDestroy, Self, ElementRef } from '@angular/core';
import { CheckboxLeaderDirective } from './checkbox-leader.directive';
import { Subscription } from 'rxjs';
import { CheckboxLeaderAbstract } from './checkbox-leader-abstract';

@Directive({
  selector: '[checkbox-leader-item]'
})
export class CheckboxLeaderItemDirective extends CheckboxLeaderAbstract implements OnInit, OnDestroy {

  private leaderListen: Subscription;
  private eventListen: Subscription;

  //  leader checkbox
  // @Input('checkbox-leader-item') leader: CheckboxLeaderDirective;
  _leader: CheckboxLeaderDirective;

  @Input('checkbox-leader-item')
  set leader(value: CheckboxLeaderDirective) {
    this._leader = value;
    this.destory();
    this.init();
  }

  get leader(): CheckboxLeaderDirective {
    return this._leader;
  }

  constructor(
    @Self() elementRef: ElementRef,
  ) {
    super(elementRef);
  }

  private init() {
    if (!this.leader) {
      throw new Error('leader not ref.');
    }
    else {
      // 註冊觀察 leader
      this.leaderListen = this.leader.command.asObservable().subscribe(ob => {
        this.changeChecked(ob);
      });
      this.leader.checkin(this, this.checkboxHost.checked);
      this.eventListen = this.eventObservable.subscribe(event => {
        // 更新目前值
        this.leader.checkin(this, this.checkboxHost.checked);
      });
    }
  }

  private destory() {
    // 取消觀察 leader
    if (this.leaderListen) { this.leaderListen.unsubscribe(); }
    if (this.eventListen) { this.eventListen.unsubscribe(); }
    // 退出 leader 控管列表
    if (this.leader) { this.leader.checkout(this); }
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destory();
  }

  private changeChecked(checked: boolean) {
    if (this.checkboxHost.checked !== checked) {
      this.checkboxHost.click();
    }
  }
}
