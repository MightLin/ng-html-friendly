import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDynamicComponent } from './test-dynamic.component';
import { FormsModule } from '@angular/forms';
import { CheckedListDirective, CheckboxHeaderDirective } from 'projects/ng-html-friendly/src';
import { CheckboxHeaderContainerDirective } from 'projects/ng-html-friendly/src/lib/checkbox-header/checkbox-header-container.directive';

describe('[CheckboxHeaderDirective]TestDynamicComponent', () => {
  let component: TestDynamicComponent;
  let fixture: ComponentFixture<TestDynamicComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestDynamicComponent, CheckboxHeaderDirective, CheckboxHeaderContainerDirective, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('item all check', async () => {
    const checkbox = element.querySelectorAll('input.test[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;

    allCk.click();

    expect(allCk.checked).toBeTruthy();
    expect(checkbox.length).toBeGreaterThan(0);
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeTruthy();
    }

    const add = element.querySelector('#add') as HTMLInputElement;
    add.click();
    fixture.detectChanges();
    expect(allCk.checked).toBeFalsy();
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeTruthy();
    }
  });

});
