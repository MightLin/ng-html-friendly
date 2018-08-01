import {
  Directive,
  HostListener,
  Input,
  OnInit,
  DoCheck,
  Self,
  ElementRef
} from '@angular/core';
import { isArray } from 'util';

@Directive({
  selector: 'selector: "input[checkedList][type=checkbox]"'
})
export class CheckedListDirective implements OnInit, DoCheck {
  ngDoCheck(): void {
    if (!this._isArr) {
      let set = this.checkedList as Set<any>;
      if (set.has(this.value)) {
        if (!this._inputCheck.nativeElement.checked) {
          this._inputCheck.nativeElement.checked = true;
          // console.log("to true");
        }
      } else {
        if (this._inputCheck.nativeElement.checked) {
          this._inputCheck.nativeElement.checked = null;
          // console.log("to false");
        }
      }
    } else {
      let arr = this.checkedList as any[];
      let index = arr.indexOf(this.value);
      // console.log("index" + index);
      // console.log("checked:" + this._inputCheck.nativeElement.checked);
      if (index == -1 && this._inputCheck.nativeElement.checked) {
        this._inputCheck.nativeElement.checked = null;
      } else if (index > -1 && !this._inputCheck.nativeElement.checked) {
        this._inputCheck.nativeElement.checked = true;
      }
    }
  }

  constructor(@Self() private _inputCheck: ElementRef) {
    //console.dir(_inputCheck);
  }

  _isArr: boolean = false;

  @Input() checkedList: Set<any> | any[];

  @Input() value: any;

  @HostListener('change', ['$event.target.checked', '$event'])
  onChange(checked: boolean, event) {
    if (!this._isArr) {
      let set = this.checkedList as Set<any>;
      if (set.has(this.value)) {
        if (!checked) set.delete(this.value);
      } else {
        if (checked) set.add(this.value);
      }
    } else {
      let arr = this.checkedList as any[];
      //console.dir(arr);
      let index = arr.indexOf(this.value);

      if (index == -1 && checked) {
        arr.push(this.value);
      } else if (index > -1 && !checked) {
        arr.splice(index, 1);
      }
    }
  }

  ngOnInit(): void {
    this._isArr = isArray(this.checkedList);
  }
}
