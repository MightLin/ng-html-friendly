import { Routes } from '@angular/router';
import { DemoBinCheckboxComponent } from './demo-bin-checkbox/demo-bin-checkbox.component';
import { DemoCheckedListComponent } from './demo-checked-list/demo-checked-list.component';
import { DemoCheckboxHeaderComponent } from './demo-checkbox-header/demo-checkbox-header.component';
import { DemoCheckboxLeaderComponent } from './demo-checkbox-leader/demo-checkbox-leader.component';
import { DemoBreadcrumbComponent } from './demo-breadcrumb/demo-breadcrumb.component';

export const appRoutes: Routes = [
  { path: 'BinCheckbox', component: DemoBinCheckboxComponent },
  { path: 'CheckedList', component: DemoCheckedListComponent },
  { path: 'CheckboxHeader', component: DemoCheckboxHeaderComponent },
  { path: 'CheckboxLeader', component: DemoCheckboxLeaderComponent },
  {
    path: 'Father',
    data: { breadcrumb: '父親' },
    children: [
      {
        path: 'Child',
        data: { breadcrumb: '兒子' },
        children: [
          {
            path: 'Breadcrumb', component: DemoBreadcrumbComponent,
            // ,
            data: { breadcrumb: '麵包屑Demo' }
          },
          {
            path: 'Breadcrumb/:id', component: DemoBreadcrumbComponent,
            // ,
            data: { breadcrumb: '麵包屑Demo有ID' }
          }
        ]
      }
    ]
  }
];
