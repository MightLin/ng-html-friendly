import { Directive, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CheckboxLeaderDirective } from './checkbox-leader.directive';
import { Subscription } from 'rxjs';
import { CheckboxLeaderAbstract } from './checkbox-leader-abstract';

@Directive({
  selector: '[checkbox-leader-item]'
})
export class CheckboxLeaderItemDirective extends CheckboxLeaderAbstract implements OnInit, OnDestroy, AfterViewInit {

  private leaderListen: Subscription;
  private eventListen: Subscription;

  //  leader checkbox
  @Input('checkbox-leader-item') leader: CheckboxLeaderDirective;


  ngOnInit(): void {
    if (!this.leader) { throw new Error('leader not ref.'); }

    // 註冊觀察 leader
    this.leaderListen = this.leader.command.asObservable().subscribe(ob => {
      this.changeChecked(ob);
    });

    this.eventListen = this.eventObservable.subscribe(event => {
      // 更新目前值
      this.leader.checkin(this, this.checkboxHost.checked);
    });
  }
  ngAfterViewInit(): void {
    // 加入 leader 控管列表
    // console.log(this.checkboxHost.checked);
    this.leader.checkin(this, this.checkboxHost.checked);
  }

  ngOnDestroy(): void {
    // 取消觀察 leader
    if (this.leaderListen) { this.leaderListen.unsubscribe(); }
    if (this.eventListen) { this.eventListen.unsubscribe(); }
    // 退出 leader 控管列表
    this.leader.checkout(this);
  }

  private changeChecked(checked: boolean) {
    if (this.checkboxHost.checked !== checked) {
      this.checkboxHost.click();
    }

  }

}
