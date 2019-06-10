import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmptyComponent } from './test-empty.component';
import { FormsModule } from '@angular/forms';
import { CheckedListDirective, CheckboxHeaderDirective } from 'projects/ng-html-friendly/src';
import { CheckboxHeaderContainerDirective } from 'projects/ng-html-friendly/src/lib/checkbox-header/checkbox-header-container.directive';

describe('[CheckboxHeaderDirective]TestEmptyComponent', () => {
  let component: TestEmptyComponent;
  let fixture: ComponentFixture<TestEmptyComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestEmptyComponent, CheckboxHeaderDirective, CheckboxHeaderContainerDirective, CheckedListDirective]
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
    const allCk = element.querySelector('[checkHeader]') as HTMLInputElement;
    expect(allCk.checked).toBeFalsy();
  });
});
