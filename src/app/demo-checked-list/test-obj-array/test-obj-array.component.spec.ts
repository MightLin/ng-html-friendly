import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObjArrayComponent } from './test-obj-array.component';
import { CheckedListDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';

describe('TestObjArrayComponent', () => {
  let component: TestObjArrayComponent;
  let fixture: ComponentFixture<TestObjArrayComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestObjArrayComponent, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObjArrayComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
