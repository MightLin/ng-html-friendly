import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckedListComponent } from './demo-checked-list.component';
import { CheckedListDirective } from 'projects/ng-html-friendly/src';
import { FormsModule } from '@angular/forms';

describe('DemoCheckedListComponent', () => {
  let component: DemoCheckedListComponent;
  let fixture: ComponentFixture<DemoCheckedListComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DemoCheckedListComponent, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckedListComponent);
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
