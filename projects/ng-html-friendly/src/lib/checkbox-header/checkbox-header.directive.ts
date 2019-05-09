import { debounceTime, every, mergeMap } from 'rxjs/internal/operators';
import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Self,
  Renderer2,
  AfterContentChecked,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  OnDestroy,
  IterableDiffers,
  IterableDiffer
} from '@angular/core';
import { from, Subscription, fromEvent } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective implements OnInit, AfterContentChecked, OnChanges, AfterContentInit, OnDestroy {

  // tslint:disable-next-line: no-input-rename
  @Input('checkHeader') checkHeaderName: string;

  // 偵側到此變數變更時將會更新
  @Input() dectTarget: any;

  // checkbox for all-check
  checkboxHeader: HTMLInputElement;
  // private checkboxHeaderSub: Subscription;

  // checkbox list
  checkboxGroup: NodeListOf<HTMLInputElement>;

  private headListen: Subscription;
  private groupClick: Subscription;
  private mustRefresh = false;
  private differ: IterableDiffer<HTMLElement>;
  constructor(
    @Self() private elementRef: ElementRef,
    iterable: IterableDiffers
  ) {
    this.differ = iterable.find([]).create(null);
  }

  ngOnInit() {
    this.checkboxHeader = this.elementRef.nativeElement;
    this.registerCheckboxHeadEvent();
  }

  ngOnDestroy(): void {
    if (this.headListen) {
      this.headListen.unsubscribe();
    }
    if (this.groupClick) {
      this.groupClick.unsubscribe();
    }
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
    // console.log('ngAfterContentChecked');
    if (this.mustRefresh) {
      this.getCheckboxGroup();
      if (this.checkboxGroup && this.differ.diff(Array.from(this.checkboxGroup))) {
        // console.log('change');
        this.mustRefresh = false;
        this.registerCheckboxGroupEvent();
        this.checkboxHeader.checked = null;
        this.checkAll(false);
      }
    }
  }

  private registerCheckboxHeadEvent() {
    this.headListen = fromEvent(this.checkboxHeader, 'change').subscribe(event => {
      if (this.checkboxHeader.checked) { this.checkAll(true); } else { this.checkAll(false); }
    });
  }


  /** 取得連結的checkbox */
  private getCheckboxGroup() {
    const body = this.elementRef.nativeElement.closest('body') as HTMLElement;
    this.checkboxGroup = body.querySelectorAll(
      'input[type=checkbox][' + this.checkHeaderName + ']'
    ) as NodeListOf<HTMLInputElement>;
  }

  private registerCheckboxGroupEvent() {
    if (this.groupClick) { this.groupClick.unsubscribe(); }
    this.groupClick =
      from(this.checkboxGroup)
        .pipe(
          mergeMap(h => fromEvent(h, 'change', e => e.target)),
          debounceTime(100)
        ).subscribe(s => {
          this.checkStatus(s);
        });
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
