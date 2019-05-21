import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CheckboxLeaderDirective } from 'projects/ng-html-friendly/src';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log("ngOnInit:" + this.leader);
  }

  @Input() leader: CheckboxLeaderDirective;
  @Output() getLeader = new EventEmitter<CheckboxLeaderDirective>();

  ngAfterViewInit(): void {
    // if (this.head) {
    //   console.log("ngAfterViewInit:" + this.checkleader);
    //   console.log(this.checkleader)
    //   this.getLeader.emit(this.checkleader);
    // }
  }

  ngAfterContentInit(): void {

  }




  @Input() head = false;

  @ViewChild(CheckboxLeaderDirective) checkleader: CheckboxLeaderDirective;

}
