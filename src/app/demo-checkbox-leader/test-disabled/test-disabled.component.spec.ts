import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDisabledComponent } from './test-disabled.component';
import { FormsModule } from '@angular/forms';
import { CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective } from 'projects/ng-html-friendly/src';

describe('[CheckboxLeaderDirective]TestDisabledComponent', () => {
  let component: TestDisabledComponent;
  let fixture: ComponentFixture<TestDisabledComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestDisabledComponent, CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDisabledComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init', () => {
    const checkbox = element.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeFalsy();
    }
  });

  it('after allCheck', async () => {
    const checkbox = element.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    const allCk = element.querySelector('[checkbox-leader]') as HTMLInputElement;
    allCk.click();

    expect(checkbox.length).toBeGreaterThan(0);
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked || h.disabled).toBeTruthy('must all fase');
    }

    expect(allCk.checked).toBeTruthy();
  });

  it('item all check', async () => {
    const checkbox = element.querySelectorAll('input.test[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    const allCk = element.querySelector('[checkbox-leader]') as HTMLInputElement;

    expect(checkbox.length).toBeGreaterThan(0);
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      h.click();
    }
    fixture.detectChanges();
    expect(allCk.checked).toBeTruthy();
  });


});
