import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DemoBinCheckboxComponent } from './demo-bin-checkbox/demo-bin-checkbox.component';
import { DemoCheckedListComponent } from './demo-checked-list/demo-checked-list.component';
import { DemoCheckboxHeaderComponent } from './demo-checkbox-header/demo-checkbox-header.component';
import { BinCheckboxModule, CheckedListModule, CheckboxHeaderModule } from 'projects/ng-html-friendly/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    DemoCheckedListComponent,
    DemoBinCheckboxComponent,
    DemoCheckboxHeaderComponent
  ],
  imports: [
    BrowserModule,
    BinCheckboxModule,
    CheckedListModule,
    CheckboxHeaderModule,
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
