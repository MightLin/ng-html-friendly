import { Component, OnInit } from '@angular/core';
import { CheckboxHeaderDirective } from 'projects/ng-html-friendly/src/public_api';
import { interval } from 'rxjs';
import { first } from 'rxjs/internal/operators';

@Component({
  selector: 'app-demo-checkbox-header',
  templateUrl: './demo-checkbox-header.component.html',
  styleUrls: ['./demo-checkbox-header.component.css']
})
export class DemoCheckboxHeaderComponent implements OnInit {



  demo3 = [1, 2, 3];

  demo3List = [2];

  demo4: any;

  constructor() { }



  ngOnInit() {
  }




}
