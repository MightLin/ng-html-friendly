import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoBinCheckboxComponent } from "./demo-bin-checkbox/demo-bin-checkbox.component";
import { BinCheckboxModule } from "../../lib/bin-checkbox/bin-checkbox.module";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { DemoCheckedListComponent } from "./demo-checked-list/demo-checked-list.component";
import { CheckedListModule } from "../../lib/checked-list/checked-list.module";

@NgModule({
  declarations: [
    AppComponent,
    DemoBinCheckboxComponent,
    DemoCheckedListComponent
  ],
  imports: [
    BrowserModule,
    BinCheckboxModule,
    CheckedListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
