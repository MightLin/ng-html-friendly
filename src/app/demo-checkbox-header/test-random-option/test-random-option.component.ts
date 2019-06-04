import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-random-option',
  templateUrl: './test-random-option.component.html',
  styleUrls: ['./test-random-option.component.css']
})
export class TestRandomOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  demo1 = {
    basicCount: 5,
    basicArr: [],
  };
  newArr1() {
    this.demo1.basicArr = this.range(this.demo1.basicCount);
  }
  range(length) {
    return Array.apply(null, { length: length }).map((v, i) => i);
  }
}
