// import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { CheckedListDirective } from "./checked-list.directive";

// @NgModule({
//   imports: [CommonModule],
//   declarations: [CheckedListDirective],
//   exports: [CheckedListDirective]
// })
// export class CheckedListModule {}

import { NgModule } from "@angular/core";
import { CheckedListDirective } from "./checked-list.directive";

@NgModule({
  imports: [],
  declarations: [CheckedListDirective],
  exports: [CheckedListDirective]
})
export class CheckedListModule {}
