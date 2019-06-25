
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
  private differ: IterableDiffer<HTMLInputElement>;
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
    const changes = this.differ.diff(newCheckbox);
    // console.log('checkCheckboxGroup:' + newCheckbox.length);
    if (changes) {
      // console.log('changes');
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
}
