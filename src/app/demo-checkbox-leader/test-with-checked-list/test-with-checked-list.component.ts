import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-with-checked-list',
  templateUrl: './test-with-checked-list.component.html',
  styleUrls: ['./test-with-checked-list.component.css']
})
export class TestWithCheckedListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  demo3 = [1, 2, 3];

  demo3List = [1, 2, 3];
}
