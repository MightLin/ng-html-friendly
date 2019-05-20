import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-leader',
  templateUrl: './demo-checkbox-leader.component.html',
  styleUrls: ['./demo-checkbox-leader.component.css']
})
export class DemoCheckboxLeaderComponent implements OnInit {

  demo1 = {
    basicCount: 5,
    basicArr: [],
    defaultChecked: false,
  };

  demo2 = [8, 9, 10]


  demo3 = [1, 2, 3];

  demo3List = [2];

  constructor() { }

  ngOnInit() {
  }

  addDemo2() {
    this.demo2.push(Math.floor(Math.random() * 9999));
  }


  range(length) {
    return Array.apply(null, { length: length }).map((v, i) => i);
  }
}
