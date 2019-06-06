import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {
  variableArr: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  async mockApi() {
    return new Promise((resolve, reject) => {
      timer(100).subscribe(() => {
        this.variableArr = ["3"];
        resolve();
      });
    });
  }


}
