import { Component, OnInit } from '@angular/core';
import { CheckboxHeaderDirective } from 'dist/ng-html-friendly/public_api';

@Component({
  selector: 'app-demo-checkbox-header',
  templateUrl: './demo-checkbox-header.component.html',
  styleUrls: ['./demo-checkbox-header.component.css']
})
export class DemoCheckboxHeaderComponent implements OnInit {
  constructor() {}

  arr: any[] = [];

  randomArr: number[] = [];

  ngOnInit() {}

  buildArr(ch: CheckboxHeaderDirective) {
    var count = Math.floor(Math.random() * 10) + 9;

    this.randomArr = [];
    for (var i = 0; i < count; i++) {
      this.randomArr.push(Math.floor(Math.random() * 99));
    }
    console.log(this.randomArr.length);
    ch.Refresh();
  }
}
