import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dynamic-option',
  templateUrl: './test-dynamic-option.component.html',
  styleUrls: ['./test-dynamic-option.component.css']
})
export class TestDynamicOptionComponent implements OnInit {
  demo2 = [8, 9, 10];
  constructor() { }
  addDemo2() {
    this.demo2.push(Math.floor(Math.random() * 9999));
  }
  ngOnInit() {
  }

}
