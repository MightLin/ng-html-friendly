import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-header',
  templateUrl: './demo-checkbox-header.component.html',
  styleUrls: ['./demo-checkbox-header.component.css']
})
export class DemoCheckboxHeaderComponent implements OnInit {
  demo1 = {
    basicCount: 5,
    basicArr: [],
  };

  demo2 = [8, 9, 10]


  demo3 = [1, 2, 3];

  demo3List = [2];

  demo4: any;

  constructor() { }

  newArr1() {
    this.demo1.basicArr = this.range(this.demo1.basicCount);
  }

  ngOnInit() {
  }

  addDemo2() {
    this.demo2.push(Math.floor(Math.random() * 9999));
  }


  range(length) {
    return Array.apply(null, { length: length }).map((v, i) => i);
  }
}
