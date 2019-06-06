
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
import { CheckboxParent } from '../checkbox/checkbox-parent';
import { CheckboxChild } from '../checkbox/checkbox-child';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[checkHeader]',
  exportAs: 'checkHeader'
})
export class CheckboxHeaderDirective extends CheckboxParent implements OnInit, AfterContentChecked, OnDestroy, DoCheck {

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

  // checkbox list
  checkboxGroup: CheckboxChild[] = [];

  private mustRefresh = false;

  //  用 checkbox child的 index+checked 組成字串判斷是否有變更
  private differ: IterableDiffer<string>;
  constructor(
    @Self() private elementRef: ElementRef,
    @Inject(CheckboxHeaderContainerDirective) @Optional() @SkipSelf() private headerContainer: CheckboxHeaderContainerDirective,
    iterable: IterableDiffers
  ) {
    super(elementRef.nativeElement);
    this.differ = iterable.find([]).create(null);
  }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy(): void {
    this.destoryChild();
    this.destroy();
  }

  refresh() {
    // console.log('refresh');
    this.mustRefresh = true;
  }

  ngAfterContentChecked() {
    if (this.mustRefresh) {
      this.checkCheckboxGroup();
      this.mustRefresh = false;
    }
  }

  private checkCheckboxGroup(): void {
    const newCheckbox = Array.from(this.getCheckboxGroup()).map(h => h);
    const changes = this.differ.diff(newCheckbox.map((h, i) => i + "" + h.checked));
    // console.log('checkCheckboxGroup:' + newCheckbox.length);
    if (changes) {
      console.log('changes');
      this.destoryChild();
      this.checkboxGroup = newCheckbox.map(h => new CheckboxChild(h));
      this.checkboxGroup.forEach(c => {
        c.parent = this;
      });
    }
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
    this.refresh();
  }

  private destoryChild() {
    this.checkboxGroup.forEach(c => {
      c.destory();
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

  // private registerCheckboxGroupEvent() {
  //   if (this.groupClick) { this.groupClick.unsubscribe(); }

  //   // using rxjs/operators, not  rxjs/operators
  //   this.groupClick =
  //     from(this.checkboxGroup)
  //       .pipe(
  //         // switchMap(h => of(h)),
  //         mergeMap(h => fromEvent(h, 'change')),
  //         map(e => e.target as HTMLInputElement),
  //         debounceTime(100)
  //       )
  //       .subscribe(s => {
  //         this.checkStatus(s);
  //       });
  // }

  // /** 檢查 checkbox Header 是否需要勾選 */
  // private checkStatus(chk: HTMLInputElement) {
  //   if (!chk.checked) {
  //     this.checkboxHeader.checked = null;
  //   } else {
  //     from(this.checkboxGroup)
  //       .pipe(every(ch => ch.checked === true || ch.disabled))
  //       .subscribe(all => {
  //         if (all) { this.checkboxHeader.checked = true; } else { this.checkboxHeader.checked = false; }
  //       });
  //   }
  // }


  // /** 全選或取消全選 */
  // checkAll(checked: boolean) {
  //   if (!this.checkboxGroup) { return; }
  //   // console.log('checkAll:' + checked);
  //   for (let i = 0; i < this.checkboxGroup.length; i++) {
  //     if (this.checkboxGroup[i].checked !== checked) {
  //       this.checkboxGroup[i].click();
  //     }
  //   }
  // }
}
