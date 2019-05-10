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
  IterableDiffer,
  DoCheck
} from '@angular/core';
import { from, Subscription, fromEvent } from 'rxjs';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective implements OnInit, AfterContentChecked, OnChanges, OnDestroy, DoCheck {

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dectTarget !== undefined) {
      this.mustRefresh = true;
    }
  }

  refresh() {
    // console.log('refresh');
    this.mustRefresh = true;
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
    if (this.mustRefresh) {
      // console.log('ngAfterContentChecked');
      this.checkCheckboxGroup();
      this.mustRefresh = false;
    }
  }

  private checkCheckboxGroup(): void {
    const newCheckbox = this.getCheckboxGroup();
    const changes = this.differ.diff(Array.from(newCheckbox));
    // console.log('checkCheckboxGroup:' + newCheckbox.length);
    if (changes) {
      // console.log('change old:' + ((this.checkboxGroup) ? this.checkboxGroup.length : 'null'));
      this.checkboxGroup = newCheckbox;
      this.registerCheckboxGroupEvent();
      this.checkboxHeader.checked = null;
      this.checkAll(false);
      this.mustRefresh = false;
    }
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
    this.checkCheckboxGroup();
  }

  private registerCheckboxHeadEvent() {
    this.headListen = fromEvent(this.checkboxHeader, 'change').subscribe(event => {
      // console.log(this.checkboxHeader.checked);
      if (this.checkboxHeader.checked) { this.checkAll(true); } else { this.checkAll(false); }
    });
  }


  /** 取得連結的checkbox */
  private getCheckboxGroup() {
    const body = this.elementRef.nativeElement.closest('body') as HTMLElement;
    return body.querySelectorAll(
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
    if (!this.checkboxGroup) { return; }
    // console.log('checkAll:' + checked);
    for (let i = 0; i < this.checkboxGroup.length; i++) {
      if (this.checkboxGroup[i].checked !== checked) {
        this.checkboxGroup[i].click();
      }
    }
  }
}
