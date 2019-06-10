import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dynamic',
  templateUrl: './test-dynamic.component.html',
  styleUrls: ['./test-dynamic.component.css']
})
export class TestDynamicComponent implements OnInit {
  demo2 = [8, 9, 10]
  constructor() { }

  ngOnInit() {
  }
  addDemo2() {
    this.demo2.push(Math.floor(Math.random() * 9999));
  }
}
