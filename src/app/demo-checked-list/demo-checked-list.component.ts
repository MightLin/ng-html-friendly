import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-checked-list',
  templateUrl: './demo-checked-list.component.html',
  styleUrls: ['./demo-checked-list.component.css']
})
export class DemoCheckedListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  variableArr: string[] = [];
  numArr: number[] = [];
  objArr: any[] = [];
}
