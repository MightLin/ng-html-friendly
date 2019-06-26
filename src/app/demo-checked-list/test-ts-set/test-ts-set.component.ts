import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ts-set',
  templateUrl: './test-ts-set.component.html',
  styleUrls: ['./test-ts-set.component.css']
})
export class TestTsSetComponent implements OnInit {

  arr: any[] = [];

  model = 1;

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.arr.length == 0) {
      this.arr.push(this.model);
    }
  }

  remove() {
    if (this.arr.length == 1) {
      this.arr.shift();
    }
  }

}
