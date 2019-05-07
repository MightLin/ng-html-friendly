import { Component, OnInit } from '@angular/core';
import { CheckboxHeaderDirective } from 'projects/ng-html-friendly/src/public_api';

@Component({
  selector: 'app-demo-checkbox-header',
  templateUrl: './demo-checkbox-header.component.html',
  styleUrls: ['./demo-checkbox-header.component.css']
})
export class DemoCheckboxHeaderComponent implements OnInit {
  constructor() {
    for (var i = 0; i < 500; i++) {
      this.arr.push(i);
    }
  }

  arr: any[] = [];
  sctArr: any[] = [];
  randomArr: number[] = [];
  randomArr2: number[] = [];
  ngOnInit() { }


  buildArr() {
    var count = Math.floor(Math.random() * 100) + 10;

    this.randomArr = [];
    for (var i = 0; i < count; i++) {
      this.randomArr.push(Math.floor(Math.random() * 9999));
    }
    console.log(this.randomArr.length);
  }

  updateArr(ch: CheckboxHeaderDirective) {
    let count = Math.floor(Math.random() * 100) + 10;

    this.randomArr2.slice(0, 0);
    for (let i = 0; i < count; i++) {
      this.randomArr2.push(Math.floor(Math.random() * 9999));
    }
    console.log(this.randomArr2.length);
    ch.refresh();
  }
}
