import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DemoBinCheckboxComponent } from './demo-bin-checkbox/demo-bin-checkbox.component';
import { DemoCheckedListComponent } from './demo-checked-list/demo-checked-list.component';
import { DemoCheckboxHeaderComponent } from './demo-checkbox-header/demo-checkbox-header.component';
import { BinCheckboxModule, CheckedListModule, CheckboxHeaderModule } from 'projects/ng-html-friendly/src/public_api';
import { ParentComponent } from './demo-checkbox-header/parent/parent.component';
import { ChildComponent } from './demo-checkbox-header/child/child.component';
import { DemoCheckboxLeaderComponent } from './demo-checkbox-leader/demo-checkbox-leader.component';
import { CheckboxLeaderModule } from 'projects/ng-html-friendly/src/lib/checkbox-leader';
import { FormsModule } from '@angular/forms';
import { DemoBreadcrumbComponent } from './demo-breadcrumb/demo-breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCheckedListComponent,
    DemoBinCheckboxComponent,
    DemoCheckboxHeaderComponent,
    ParentComponent,
    ChildComponent,
    DemoCheckboxLeaderComponent,
    DemoBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BinCheckboxModule,
    CheckedListModule,
    CheckboxHeaderModule,
    CheckboxLeaderModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true }
      // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
