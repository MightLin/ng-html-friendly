import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as _ from 'lodash';
import { TestObservableComponent } from './test-observable.component';
import { FormsModule } from '@angular/forms';
import { CheckedListDirective } from 'projects/ng-html-friendly/src';

describe('TestObservableComponent', () => {
  let component: TestObservableComponent;
  let fixture: ComponentFixture<TestObservableComponent>;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestObservableComponent, CheckedListDirective]
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

  it('init must be empty', () => {
    const checkbox = element.querySelectorAll('input[type="checkbox"]');
    expect(component.variableArr.length).toEqual(0);
    expect(_.every(checkbox.item, i => i.checked == false)).toBeTruthy();
  });

  it('api result must be set', async () => {
    await component.mockApi();
    expect(component.variableArr.length).toEqual(1);
    expect(component.variableArr[0]).toEqual("3");
  });

});
