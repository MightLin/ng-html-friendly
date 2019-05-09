import { Component, OnInit, Input, ViewChild, AfterContentInit, ContentChild } from '@angular/core';
import { CheckboxHeaderDirective } from 'projects/ng-html-friendly/src/public_api';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() head: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  @ViewChild(CheckboxHeaderDirective) ck: CheckboxHeaderDirective;
  ngAfterViewInit(): void {
    // if (this.head) {
    //   console.log('to refresh');
    //   this.ck.refresh();
    // }
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}
