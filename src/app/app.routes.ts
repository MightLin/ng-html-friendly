import { Routes } from "@angular/router";
import { DemoBinCheckboxComponent } from "./demo-bin-checkbox/demo-bin-checkbox.component";
import { DemoCheckedListComponent } from "./demo-checked-list/demo-checked-list.component";
export const appRoutes: Routes = [
  {
    path: "BinCheckbox",
    component: DemoBinCheckboxComponent
  },
  {
    path: "CheckedList",
    component: DemoCheckedListComponent
  }
];
