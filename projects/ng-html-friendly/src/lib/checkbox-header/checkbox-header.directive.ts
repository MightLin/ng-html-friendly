import { debounceTime, every, tap } from 'rxjs/internal/operators';
import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Self,
  Renderer2,
  AfterContentChecked,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Subject, from, Subscription } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective implements OnInit, AfterContentChecked, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('checkHeader') checkHeaderName: string;

  // 偵側到此變數變更時將會更新
  @Input() dectTarget: any;

  // checkbox for all-check
  checkboxHeader: HTMLInputElement;
  // private checkboxHeaderSub: Subscription;

  // checkbox list
  checkboxGroup: NodeListOf<HTMLInputElement>;

  private groupListen: any[] = [];
  private groupClick: Subject<HTMLInputElement> = new Subject<HTMLInputElement>();
  private mustRefresh = false;

  constructor(
    @Self() private elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    this.groupClick
      .asObservable()
      .pipe(
        debounceTime(100)
      )
      .subscribe(s => {
        this.checkStatus(s);
      });
  }

  ngOnInit() {
    this.checkboxHeader = this.elementRef.nativeElement;
    this.registerCheckboxHeadEvent();
  }

  ngAfterContentInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dectTarget !== undefined) {
      this.refresh();
    }
  }

  refresh() {
    this.mustRefresh = true;
  }

  ngAfterContentChecked() {
    if (this.mustRefresh) {
      this.mustRefresh = false;
      this.getCheckboxGroup();
      this.registerCheckboxGroupEvent();
      this.checkboxHeader.checked = null;
      this.checkAll(false);
    }
  }

  private registerCheckboxHeadEvent() {
    // this.checkboxHeaderSub =
    this._renderer.listen(this.checkboxHeader, 'change', event => {
      if (this.checkboxHeader.checked) { this.checkAll(true); } else { this.checkAll(false); }
    });
  }


  /** 取得連結的checkbox */
  private getCheckboxGroup() {
    const body = this.elementRef.nativeElement.closest('body') as HTMLElement;
    this.checkboxGroup = body.querySelectorAll(
      'input[type=checkbox][' + this.checkHeaderName + ']'
    ) as NodeListOf<HTMLInputElement>;
    // console.log(this.checkboxGroup);
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
  }


  /** 檢查 checkbox Header 是否需要勾選 */
  private checkStatus(chk: HTMLInputElement) {
    if (!chk.checked) {
      this.checkboxHeader.checked = null;
    } else {
      from(this.checkboxGroup)
        .pipe(every(ch => ch.checked === true || ch.disabled))
        .subscribe(all => {
          if (all) { this.checkboxHeader.checked = true; } else { this.checkboxHeader.checked = false; }
        });
    }
  }


  /** 全選或取消全選 */
  checkAll(checked: boolean) {
    for (let i = 0; i < this.checkboxGroup.length; i++) {
      if (this.checkboxGroup[i].checked !== checked) {
        this.checkboxGroup[i].click();
      }
    }
  }
}
