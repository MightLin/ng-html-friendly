import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTsSetComponent } from './test-ts-set.component';
import { CheckedListDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';

describe('[CheckedListDirective]TestTsSetComponent', () => {
  let component: TestTsSetComponent;
  let fixture: ComponentFixture<TestTsSetComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestTsSetComponent, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTsSetComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('arr init must be init', () => {
    const checkbox = element.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(component.arr.length).toBe(0);
    expect(checkbox.checked).toBeFalsy();
  });

  it('arr after arr change', () => {
    const checkbox = element.querySelector('input[type="checkbox"]') as HTMLInputElement;
    component.add();
    fixture.detectChanges();
    expect(component.arr.length).toBe(1);
    expect(checkbox.checked).toBeTruthy();
  });

});
