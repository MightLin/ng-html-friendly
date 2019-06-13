import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { TestColumnDirective } from '../test-column.directive';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() arr: any[];

  @ContentChild(TestColumnDirective) column;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.column);
  }

}
