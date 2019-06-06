import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWithCheckedListComponent } from './test-with-checked-list.component';
import { FormsModule } from '@angular/forms';
import { CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective } from 'projects/ng-html-friendly/src';

describe('[CheckboxLeaderDirective]TestWithCheckedListComponent', () => {
  let component: TestWithCheckedListComponent;
  let fixture: ComponentFixture<TestWithCheckedListComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestWithCheckedListComponent, CheckboxLeaderDirective, CheckboxLeaderItemDirective, CheckedListDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWithCheckedListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('init', () => {
    expect(component.demo3.length).toEqual(3);
    expect(component.demo3.length).toEqual(component.demo3List.length);
    const checkbox = element.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeTruthy();
    }


  });

  it('after cancel allCheck', async () => {
    const checkbox = element.querySelectorAll('input.test[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    const allCk = element.querySelector('[checkbox-leader]') as HTMLInputElement;
    allCk.click();

    expect(checkbox.length).toBeGreaterThan(0);
    for (let i = 0; i < checkbox.length; i++) {
      const h = checkbox.item(i);
      expect(h.checked).toBeFalsy();
    }

    expect(allCk.checked).toBeFalsy();
    expect(component.demo3List.length).toEqual(0);
  });

  it('after item cancel', async () => {



    const checkbox = element.querySelector('input.test[type="checkbox"]') as HTMLInputElement;
    const allCk = element.querySelector('[checkbox-leader]') as HTMLInputElement;
    expect(checkbox).toBeTruthy();
    checkbox.click();


    expect(allCk.checked).toBeFalsy();
    expect(component.demo3List.length).toEqual(2);
  });
});
