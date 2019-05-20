import { Routes } from '@angular/router';
import { DemoBinCheckboxComponent } from './demo-bin-checkbox/demo-bin-checkbox.component';
import { DemoCheckedListComponent } from './demo-checked-list/demo-checked-list.component';
import { DemoCheckboxHeaderComponent } from './demo-checkbox-header/demo-checkbox-header.component';
import { DemoCheckboxLeaderComponent } from './demo-checkbox-leader/demo-checkbox-leader.component';

export const appRoutes: Routes = [
  { path: 'BinCheckbox', component: DemoBinCheckboxComponent },
  { path: 'CheckedList', component: DemoCheckedListComponent },
  { path: 'CheckboxHeader', component: DemoCheckboxHeaderComponent },
  { path: 'CheckboxLeader', component: DemoCheckboxLeaderComponent }
];
