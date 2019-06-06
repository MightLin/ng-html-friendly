import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVarArrayComponent } from './test-var-array.component';
import { CheckedListDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';

describe('TestVarArrayComponent', () => {
  let component: TestVarArrayComponent;
  let fixture: ComponentFixture<TestVarArrayComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestVarArrayComponent, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVarArrayComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('variableArr init must be init', () => {
    const checkbox = element.querySelector('input[value="3"]') as HTMLInputElement;
    expect(component.variableArr).toContain('3');
    expect(checkbox.checked).toBeTruthy();
  });

  it('variableArr init must be empty', () => {
    const checkbox = element.querySelector('input[value="3"]') as HTMLInputElement;
    checkbox.click();
    expect(component.variableArr.length).toEqual(0);
  });

  it('variableArr init must be added', () => {
    const checkbox = element.querySelector('input[value="4"]') as HTMLInputElement;
    checkbox.click();
    expect(component.variableArr).toContain('3');
    expect(component.variableArr).toContain('4');
  });
});
