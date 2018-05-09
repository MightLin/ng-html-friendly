// import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { BinCheckboxDirective } from "./bin-checkbox.directive";

// @NgModule({
//   imports: [CommonModule],
//   declarations: [BinCheckboxDirective],
//   exports: [BinCheckboxDirective]
// })
// export class BinCheckboxModule {}


import {NgModule} from '@angular/core';
import {BinCheckboxDirective} from './bin-checkbox.directive';

@NgModule({
  imports: [],
  declarations: [BinCheckboxDirective],
  exports: [BinCheckboxDirective]
})
export class BinCheckboxModule {
}
