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
  selector: 'input[checkedList][type=checkbox]'
})
export class CheckedListDirective implements OnInit, DoCheck {
  ngDoCheck(): void {
    this.checkContain();
  }

  checkContain() {

    if (!this.isArray()) {
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
      // console.log("value:" + this.value);
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

  _checkedList: Set<any> | any[];
  @Input()
  set checkedList(value) {
    this._checkedList = value;
    this.checkContain();
  }
  get checkedList(): Set<any> | any[] {
    return this._checkedList;
  }


  @Input() value: any;

  @HostListener('change', ['$event.target.checked', '$event'])
  onChange(checked: boolean, event) {
    if (!this.isArray()) {
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

  private isArray() {
    return isArray(this.checkedList);
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.checkContain();
  }
}
