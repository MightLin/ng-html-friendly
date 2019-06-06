import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-leader',
  templateUrl: './demo-checkbox-leader.component.html',
  styleUrls: ['./demo-checkbox-leader.component.css']
})
export class DemoCheckboxLeaderComponent implements OnInit {

  demo1 = {
    basicCount: 5,
    basicArr: [],
  };





  demo4: any;

  constructor() { }

  newArr1() {
    this.demo1.basicArr = this.range(this.demo1.basicCount);
  }

  ngOnInit() {
  }



  range(length) {
    return Array.apply(null, { length: length }).map((v, i) => i);
  }

}
