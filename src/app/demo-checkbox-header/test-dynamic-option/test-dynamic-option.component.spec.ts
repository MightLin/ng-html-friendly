import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxHeaderDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';
import { TestDynamicOptionComponent } from './test-dynamic-option.component';

describe('DemoCheckboxHeaderComponent', () => {
  let component: TestDynamicOptionComponent;
  let fixture: ComponentFixture<TestDynamicOptionComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestDynamicOptionComponent, CheckboxHeaderDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicOptionComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all checked function must be ok', () => {

    const checkbox = element.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    expect(checkCheckbox(checkbox, false)).toBeTruthy();
    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;
    allCk.click();
    expect(checkCheckbox(checkbox, true)).toBeTruthy();

    allCk.click();
    expect(checkCheckbox(checkbox, false)).toBeTruthy();
  });

  // it('checked change must be dected', () => {

  //   const checkbox = element.querySelectorAll('input[type="checkbox"][group]') as NodeListOf<HTMLInputElement>;
  //   expect(checkCheckbox(checkbox, false)).toBeTruthy();
  //   for (let i = 0; i < checkbox.length; i++) {
  //     checkbox.item(i).click();
  //   }
  //   expect(checkCheckbox(checkbox, true)).toBeTruthy();
  //   fixture.detectChanges();
  //   const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;
  //   expect(allCk.checked).toBeTruthy();

  //   checkbox.item(1).click();
  //   expect(allCk.checked).toBeFalsy();
  // });

  function checkCheckbox(checkbox: NodeListOf<HTMLInputElement>, checked: boolean) {
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox.item(i).checked != checked) {
        return false;
      }
    }
    return true;
  }
});
