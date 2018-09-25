import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxHeaderDirective } from './checkbox-header.directive';


@NgModule({
  imports: [CommonModule],
  exports: [CheckboxHeaderDirective],
  declarations: [CheckboxHeaderDirective]
})
export class CheckboxHeaderModule {}
