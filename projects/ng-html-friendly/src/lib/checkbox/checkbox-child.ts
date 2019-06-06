import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Checkbox } from './checkbox';
import { CheckboxParent } from './checkbox-parent';

export class CheckboxChild extends Checkbox {

  private leaderListen: Subscription;
  private eventListen: Subscription;
  private _lastChecked = false;
  private _parent: CheckboxParent;

  constructor(element: HTMLInputElement) {
    super(element);
  }

  set parent(value: CheckboxParent) {
    this.destory();
    this._parent = value;
    this.init();
  }
  get parent(): CheckboxParent {
    return this._parent;
  }

  private init() {
    if (!this._parent) {
      // throw new Error('leader not ref.');
    }
    else {
      // 註冊觀察 leader
      this.leaderListen = this._parent.instruction.asObservable().subscribe(ob => {
        this.changeChecked(ob);
      });
      this._parent.checkin(this, this.getCurrentChecked());
      this.eventListen = this.eventObservable.subscribe(() => {
        // 更新目前值
        this.detectChanges();
      });
    }
  }

  getCurrentChecked() {
    return this.checkboxHost.checked || this.checkboxHost.disabled;
  }

  detectChanges() {
    const current = this.getCurrentChecked();
    // console.log('current:' + current);
    // console.log('this._lastChecked:' + this._lastChecked);
    if (current !== this._lastChecked) {
      this._parent.checkin(this, current);
      this._lastChecked = current;
    }
  }

  destory() {
    // 取消觀察 leader
    if (this.leaderListen) { this.leaderListen.unsubscribe(); }
    if (this.eventListen) { this.eventListen.unsubscribe(); }
    // 退出 leader 控管列表
    if (this._parent) { this._parent.checkout(this); }
  }

  private changeChecked(checked: boolean) {
    if (this.checkboxHost.checked !== checked) {
      this.checkboxHost.click();
    }
  }
}
