import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import * as _ from 'lodash';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {


  option: any[] = [];

  checkedList: any[] = [];

  constructor() { }

  ngOnInit() {
    // this.fakeApi();
  }

  fakeApi() {
    return new Promise((resolve) => {
      of(this.fakeApiResult).pipe(delay(500)).subscribe(item => {
        this.option = item;
        // this.checkedList = _.filter(item, m => m.alive == 1);
        of(item).pipe(delay(500)).subscribe(it => {
          this.checkedList = _.filter(it, m => m.alive == 1);
          resolve();
        });

      });
    });
  }


  private fakeApiResult = [
    {
      name: 'John', alive: 1,
    },
    {
      name: 'Tony', alive: 0,
    },
    {
      name: 'Steve', alive: 0,
    },
    {
      name: 'Kevin', alive: 1,
    }
  ]
}
