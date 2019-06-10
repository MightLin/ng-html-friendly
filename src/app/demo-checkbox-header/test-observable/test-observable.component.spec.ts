import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservableComponent } from './test-observable.component';
import { CheckedListDirective, CheckboxHeaderDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';
import { CheckboxHeaderContainerDirective } from 'projects/ng-html-friendly/src/lib/checkbox-header/checkbox-header-container.directive';

describe('[CheckboxHeaderDirective]TestObservableComponent', () => {
  let component: TestObservableComponent;
  let fixture: ComponentFixture<TestObservableComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestObservableComponent, CheckboxHeaderDirective, CheckboxHeaderContainerDirective, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObservableComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init', () => {
    expect(component.option.length).toEqual(0);
    expect(component.checkedList.length).toEqual(0);
  });

  it('after api result, must be setting', async () => {
    await component.fakeApi();
    fixture.detectChanges();

    const checkbox = element.querySelectorAll('input.test[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    expect(checkbox.length).toEqual(4);
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked || h.disabled).toBeTruthy();
    }

    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;
    expect(allCk.checked).toBeTruthy();

  });
});
