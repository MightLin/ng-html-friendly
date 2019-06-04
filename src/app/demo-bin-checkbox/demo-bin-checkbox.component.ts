import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-bin-checkbox',
  templateUrl: './demo-bin-checkbox.component.html',
  styleUrls: ['./demo-bin-checkbox.component.css']
})
export class DemoBinCheckboxComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  variable: string;

  initVariable: string = 'Batman';

  variableComplex: { name: string };

  variableControl: FormControl = new FormControl('');
}
