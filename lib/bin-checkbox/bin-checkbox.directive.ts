import { FormControl } from "@angular/forms";
import {
  Directive,
  Input,
  HostBinding,
  HostListener,
  EventEmitter,
  Output,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[bin-true-value],[bin-false-value]"
})
export class BinCheckboxDirective implements OnInit {
  @Input("bin-true-value") trueValue: any;
  @Input("bin-false-value") falseValue: any;

  @Input("model") model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input("control") control: FormControl;
  @Output()
  controlChange: EventEmitter<FormControl> = new EventEmitter<FormControl>();

  @HostBinding("checked") checked;

  @HostListener("change", ["$event.target.checked", "$event"])
  onChange(checked: boolean, event) {
    if (checked) this.value = this.trueValue;
    else this.value = this.falseValue;
  }

  constructor() {}

  ngOnInit() {
    this.checked = this.value === this.trueValue;
  }

  // value: any;
  set value(value: any) {
    if (this.control) {
      this.control.setValue(value);
      this.controlChange.emit(this.control);
    } else {
      this.model = value;
      this.modelChange.emit(this.model);
    }
  }
  get value() {
    if (this.control) return this.control.value;
    return this.model;
  }
}
