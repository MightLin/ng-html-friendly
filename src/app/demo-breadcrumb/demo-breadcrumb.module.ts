import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoBreadcrumbComponent } from './demo-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        data: { breadcrumb: '父親' },
        children: [
          {
            path: 'Child',
            data: { breadcrumb: '兒子' },
            children: [
              {
                path: 'Breadcrumb', component: DemoBreadcrumbComponent,
                data: { breadcrumb: '麵包屑Demo' }
              },
              {
                path: 'Breadcrumb/:id', component: DemoBreadcrumbComponent,
                data: { breadcrumb: '麵包屑Demo有ID' }
              }
            ]
          }
        ]
      }
    ])
  ],
  declarations: [DemoBreadcrumbComponent]
})
export class DemoBreadcrumbModule { }
