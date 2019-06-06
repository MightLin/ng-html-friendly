import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservableComponent } from './test-observable.component';
import { CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';

describe('[CheckboxLeaderDirective]TestObservableComponent', () => {
  let component: TestObservableComponent;
  let fixture: ComponentFixture<TestObservableComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestObservableComponent, CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective]
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
    const allCk = element.querySelector('[checkbox-leader]') as HTMLInputElement;
    fixture.detectChanges();

    expect(allCk.checked).toBeTruthy();
    console.log('abc:' + allCk.checked);
  });
});
