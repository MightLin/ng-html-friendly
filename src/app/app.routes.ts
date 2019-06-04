import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'BinCheckbox',
    loadChildren: './demo-bin-checkbox/demo-bin-checkbox.module#DemoBinCheckboxModule',
  },
  {
    path: 'CheckedList',
    loadChildren: './demo-checked-list/demo-checked-list.module#DemoCheckedListModule',
  },
  {
    path: 'CheckboxHeader',
    loadChildren: './demo-checkbox-header/demo-checkbox-header.module#DemoCheckboxHeaderModule',
  },
  {
    path: 'CheckboxLeader',
    loadChildren: './demo-checkbox-leader/demo-checkbox-leader.module#DemoCheckboxLeaderModule',
  },
  {
    path: 'Father',
    loadChildren: './demo-breadcrumb/demo-breadcrumb.module#DemoBreadcrumbModule',
    data: { breadcrumb: '父親' },
  }
];
