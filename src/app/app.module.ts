import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoBinCheckboxComponent } from './demo-bin-checkbox/demo-bin-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoBinCheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
