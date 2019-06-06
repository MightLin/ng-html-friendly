import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-var-array',
  templateUrl: './test-var-array.component.html',
  styleUrls: ['./test-var-array.component.css']
})
export class TestVarArrayComponent implements OnInit {
  variableArr: string[] = ["3"];
  constructor() { }

  ngOnInit() {
  }

}
