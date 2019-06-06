import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-obj-array',
  templateUrl: './test-obj-array.component.html',
  styleUrls: ['./test-obj-array.component.css']
})
export class TestObjArrayComponent implements OnInit {

  opt = [
    { name: 'Bruce' },
    { name: 'Tony' },
    { name: 'Allen' },
    { name: 'Steve' },
    { name: 'Loki' },
  ];

  objArr: any[] = [];
  constructor() {
    this.objArr.push(this.opt[2]);
  }

  ngOnInit() {
  }

}
