import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { CheckedListDirective, CheckboxHeaderDirective } from 'projects/ng-html-friendly/src';
import { TestNewArrComponent } from './test-new-arr.component';
import { CheckboxHeaderContainerDirective } from 'projects/ng-html-friendly/src/lib/checkbox-header/checkbox-header-container.directive';

describe('[CheckboxHeaderDirective]TestNewArrComponent', () => {
  let component: TestNewArrComponent;
  let fixture: ComponentFixture<TestNewArrComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestNewArrComponent, CheckboxHeaderDirective, CheckboxHeaderContainerDirective, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNewArrComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('item all check', async () => {
    const add = element.querySelector('#add') as HTMLInputElement;
    add.click();
    fixture.detectChanges();

    const checkbox = getCheckbox();
    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;

    expect(checkbox.length).toBeGreaterThan(0);
    expect(allCk.checked).toBeFalsy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeFalsy();
    }

    allCk.click();

    expect(allCk.checked).toBeTruthy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeTruthy();
    }

    allCk.click();

    expect(allCk.checked).toBeFalsy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeFalsy();
    }

  });

  it('for item click', async () => {
    const add = element.querySelector('#add') as HTMLInputElement;
    add.click();
    fixture.detectChanges();

    const checkbox = getCheckbox();
    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;

    expect(checkbox.length).toBeGreaterThan(0);
    expect(allCk.checked).toBeFalsy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeFalsy();
    }

    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      h.click();
    }
    expect(allCk.checked).toBeTruthy();

    checkbox.item(1).click();
    expect(allCk.checked).toBeFalsy();
    checkbox.item(1).click();
    expect(allCk.checked).toBeTruthy();

  });

  it('item new arr', async () => {
    const add = element.querySelector('#add') as HTMLInputElement;
    add.click();

    fixture.detectChanges();

    component.demo1.basicCount = 8;
    add.click();

    fixture.detectChanges();

    const checkbox = getCheckbox();
    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;

    expect(checkbox.length).toEqual(8);
    expect(allCk.checked).toBeFalsy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeFalsy();
    }

    allCk.click();

    expect(allCk.checked).toBeTruthy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeTruthy();
    }

    checkbox.item(1).click();
    expect(allCk.checked).toBeFalsy();
  });

  function getCheckbox() {
    return element.querySelectorAll('input.test[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  }

});
