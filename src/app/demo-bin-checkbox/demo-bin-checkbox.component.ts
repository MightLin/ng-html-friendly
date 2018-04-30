import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-bin-checkbox",
  templateUrl: "./demo-bin-checkbox.component.html",
  styleUrls: ["./demo-bin-checkbox.component.scss"]
})
export class DemoBinCheckboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  variable: string;

  variableComplex: { name: string };
}
