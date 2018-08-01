import { debounceTime, every } from 'rxjs/internal/operators';
import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Self,
  Renderer2
} from '@angular/core';
import { Subject, from } from '../../../../../node_modules/rxjs';

@Directive({
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective implements OnInit {
  @Input('checkHeader') checkHeaderName: string;

  checkboxHeader: HTMLInputElement;
  checkboxGroup: NodeListOf<HTMLInputElement>;
  groupClick: Subject<HTMLInputElement> = new Subject<HTMLInputElement>();

  constructor(
    @Self() private elementRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  ngOnInit() {
    this.Refresh();
    this.checkboxHeader = this.elementRef.nativeElement;
    this.registerCheckboxHeadEvent();
  }

  Refresh() {
    let body = this.elementRef.nativeElement.closest('body') as HTMLElement;
    this.checkboxGroup = body.querySelectorAll(
      'input[type=checkbox][' + this.checkHeaderName + ']'
    ) as NodeListOf<HTMLInputElement>;
    this.registerCheckboxGroupEvent();
  }

  private registerCheckboxHeadEvent() {
    this._renderer.listen(this.checkboxHeader, 'change', event => {
      if (this.checkboxHeader.checked) this.checkAll(true);
      else this.checkAll(false);
    });
  }

  private registerCheckboxGroupEvent() {
    for (var i = 0; i < this.checkboxGroup.length; i++) {
      var chk = this.checkboxGroup[i];
      this._renderer.listen(chk, 'change', e => {
        this.groupClick.next(chk);
      });
    }

    this.groupClick
      .asObservable()
      .pipe(debounceTime(100))
      .subscribe(s => {
        this.checkStatus(s);
      });
  }

  private checkStatus(chk: HTMLInputElement) {
    if (!chk.checked) {
      this.checkboxHeader.checked = null;
    } else {
      from(this.checkboxGroup)
        .pipe(every(ch => ch.checked == true))
        .subscribe(all => {
          if (all) this.checkboxHeader.checked = true;
          else this.checkboxHeader.checked = false;
        });
    }
  }

  checkAll(checked: boolean) {
    for (var i = 0; i < this.checkboxGroup.length; i++) {
      if (this.checkboxGroup[i].checked !== checked)
        this.checkboxGroup[i].click();
    }
  }
}
