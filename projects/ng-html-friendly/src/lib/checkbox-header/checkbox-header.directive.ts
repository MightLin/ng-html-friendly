import { debounceTime, every } from 'rxjs/internal/operators';
import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Self,
  Renderer2,
  AfterContentChecked
} from '@angular/core';
import { Subject, from } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective implements OnInit, AfterContentChecked {
  // tslint:disable-next-line: no-input-rename
  @Input('checkHeader') checkHeaderName: string;

  // checkbox for all-check
  checkboxHeader: HTMLInputElement;

  // checkbox list
  checkboxGroup: NodeListOf<HTMLInputElement>;

  private groupListen: any[] = [];
  private groupClick: Subject<HTMLInputElement> = new Subject<HTMLInputElement>();
  private mustRefresh = false;

  constructor(
    @Self() private elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.refresh();
    this.checkboxHeader = this.elementRef.nativeElement;
    this.registerCheckboxHeadEvent();
  }

  refresh() {
    this.mustRefresh = true;
  }


  ngAfterContentChecked() {
    if (this.mustRefresh) {
      // console.log('refresh');
      const body = this.elementRef.nativeElement.closest('body') as HTMLElement;
      this.checkboxGroup = body.querySelectorAll(
        'input[type=checkbox][' + this.checkHeaderName + ']'
      ) as NodeListOf<HTMLInputElement>;

      this.registerCheckboxGroupEvent();
      // this.checkboxHeader.checked = null;
      this.checkAll(false);
      this.mustRefresh = false;
    }
  }

  private registerCheckboxHeadEvent() {
    this._renderer.listen(this.checkboxHeader, 'change', event => {
      if (this.checkboxHeader.checked) { this.checkAll(true); } else { this.checkAll(false); }
    });
  }

  private registerCheckboxGroupEvent() {
    for (let i = 0; i < this.groupListen.length; i++) {
      if (this.groupListen[i]) {
        this.groupListen[i]();
      }
    }
    this.groupListen = [];
    for (let i = 0; i < this.checkboxGroup.length; i++) {
      // tslint:disable-next-line: prefer-const
      const chk = this.checkboxGroup[i];
      const listen = this._renderer.listen(chk, 'change', e => {
        this.groupClick.next(chk);
      });
      this.groupListen.push(listen);
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
        .pipe(every(ch => ch.checked === true))
        .subscribe(all => {
          if (all) { this.checkboxHeader.checked = true; } else { this.checkboxHeader.checked = false; }
        });
    }
  }

  checkAll(checked: boolean) {
    for (let i = 0; i < this.checkboxGroup.length; i++) {
      if (this.checkboxGroup[i].checked !== checked) {
        this.checkboxGroup[i].click();
      }
    }
  }
}
