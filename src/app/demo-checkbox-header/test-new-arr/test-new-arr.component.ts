import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-test-new-arr',
  templateUrl: './test-new-arr.component.html',
  styleUrls: ['./test-new-arr.component.css']
})
export class TestNewArrComponent implements OnInit {


  demo1 = {
    basicCount: 5,
    basicArr: [],
  };

  constructor() { }

  ngOnInit() {
  }

  newArr1() {
    this.demo1.basicArr = this.range(this.demo1.basicCount);
  }

  buildSameArr(){
    const a = [];
    this.demo1.basicArr.forEach(element => {
      a.push(element);
    });
    console.log(a);
    this.demo1.basicArr = a;
  }



  range(length) {
    return Array.apply(null, { length: length }).map((v, i) => Math.floor(Math.random() * 60));
  }

}
