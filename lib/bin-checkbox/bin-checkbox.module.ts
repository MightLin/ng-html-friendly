import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BinCheckboxDirective } from "./bin-checkbox.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [BinCheckboxDirective],
  exports: [BinCheckboxDirective]
})
export class BinCheckboxModule {}
