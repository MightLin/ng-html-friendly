import { Component, OnInit, ViewChild } from '@angular/core';
import { from, of } from 'rxjs';
import * as _ from 'lodash';
import { CheckboxLeaderDirective } from 'projects/ng-html-friendly/src';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {


  option: any[];

  checkedList: any[] = [];

  constructor() { }

  ngOnInit() {
    // this.fakeApi();
  }

  @ViewChild(CheckboxLeaderDirective) chk: CheckboxLeaderDirective;

  fakeApi() {
    of(this.fakeApiResult).pipe(delay(500)).subscribe(item => {
      this.option = item;
      // this.checkedList = _.filter(item, m => m.alive == 1);
      of(item).pipe(delay(500)).subscribe(it => {
        this.checkedList = _.filter(it, m => m.alive == 1);
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
