import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmptyComponent } from './test-empty.component';
import { FormsModule } from '@angular/forms';
import { CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective } from 'projects/ng-html-friendly/src';

describe('[CheckboxLeaderDirective]TestEmptyComponent', () => {
  let component: TestEmptyComponent;
  let fixture: ComponentFixture<TestEmptyComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestEmptyComponent, CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmptyComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init', () => {
    const allCk = element.querySelector('[checkbox-leader]') as HTMLInputElement;
    expect(allCk.checked).toBeFalsy();
  });
});
