import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BinCheckboxModule, CheckedListModule} from 'ng-html-friendly';

import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {DemoBinCheckboxComponent} from './demo-bin-checkbox/demo-bin-checkbox.component';
import {DemoCheckedListComponent} from './demo-checked-list/demo-checked-list.component';

@NgModule({
  declarations:
      [AppComponent, DemoCheckedListComponent, DemoBinCheckboxComponent],
  imports: [
    BrowserModule, BinCheckboxModule, CheckedListModule,
    RouterModule.forRoot(
        appRoutes, {enableTracing: false, useHash: true}
        // <-- debugging purposes only
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
