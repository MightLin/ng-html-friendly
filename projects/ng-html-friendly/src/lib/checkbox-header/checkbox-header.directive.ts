
import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  Self,
  AfterContentChecked,
  OnDestroy,
  IterableDiffers,
  IterableDiffer,
  DoCheck,
  Inject,
  SkipSelf,
  Optional
} from '@angular/core';
import { from, Subscription, fromEvent } from 'rxjs';
import { CheckboxHeaderContainerDirective } from './checkbox-header-container.directive';
import { mergeMap, map, every, debounceTime } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective implements OnInit, AfterContentChecked, OnDestroy, DoCheck {

  // tslint:disable-next-line: no-input-rename
  @Input('checkHeader') checkHeaderName: string;

  // 偵側到此變數變更時將會更新
  _dectTarget: any;
  @Input('dectTarget')
  set dectTarget(value: any) {
    this._dectTarget = value;
    this.refresh();
  }
  get dectTarget() { return this._dectTarget; }

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
    @Inject(CheckboxHeaderContainerDirective) @Optional() @SkipSelf() private headerContainer: CheckboxHeaderContainerDirective,
    iterable: IterableDiffers
  ) {
    this.differ = iterable.find([]).create(null);
    // console.log(this.headerContainer);
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
    this.refresh();
  }

  private registerCheckboxHeadEvent() {
    this.headListen = fromEvent(this.checkboxHeader, 'change').subscribe(() => {
      // console.log(this.checkboxHeader.checked);
      if (this.checkboxHeader.checked) { this.checkAll(true); } else { this.checkAll(false); }
    });
  }


  /** 取得連結的checkbox */
  private getCheckboxGroup() {
    if (this.headerContainer) {
      // console.log('container');
      return this.headerContainer.nativeElement.querySelectorAll(
        'input[type=checkbox][' + this.checkHeaderName + ']'
      ) as NodeListOf<HTMLInputElement>;
    } else {
      const body = this.elementRef.nativeElement.closest('body') as HTMLElement;
      return body.querySelectorAll(
        'input[type=checkbox][' + this.checkHeaderName + ']'
      ) as NodeListOf<HTMLInputElement>;
    }
  }

  private registerCheckboxGroupEvent() {
    if (this.groupClick) { this.groupClick.unsubscribe(); }

    // using rxjs/operators, not  rxjs/operators
    this.groupClick =
      from(this.checkboxGroup)
        .pipe(
          // switchMap(h => of(h)),
          mergeMap(h => fromEvent(h, 'change')),
          map(e => e.target as HTMLInputElement),
          debounceTime(100)
        )
        .subscribe(s => {
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
