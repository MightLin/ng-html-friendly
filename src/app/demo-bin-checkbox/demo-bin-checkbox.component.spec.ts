import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBinCheckboxComponent } from './demo-bin-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BinCheckboxModule, BinCheckboxDirective } from 'projects/ng-html-friendly/src';
import { BrowserModule } from '@angular/platform-browser';
import { checkBinding } from '@angular/core/src/view/util';

describe('DemoBinCheckboxComponent', () => {
  let component: DemoBinCheckboxComponent;
  let fixture: ComponentFixture<DemoBinCheckboxComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DemoBinCheckboxComponent, BinCheckboxDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBinCheckboxComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test must be 4', () => {
    const checkbox = element.querySelectorAll('input');
    expect(checkbox.length).toEqual(4);
  });

  it('variable init must be init', () => {
    const checkbox = element.querySelector('#variable') as HTMLInputElement;
    expect(component.variable).toBeFalsy();
    expect(checkbox.checked).toBeFalsy();
  });

  it('variableComplex init must be init', () => {
    const checkbox = element.querySelector('#variableComplex') as HTMLInputElement;
    expect(component.variableComplex).toBeFalsy();
    expect(checkbox.checked).toBeFalsy();
  });

  it('variableControl init must be init', () => {
    const checkbox = element.querySelector('#variableControl') as HTMLInputElement;
    expect(component.variableControl.value).toBeFalsy();
    expect(checkbox.checked).toBeFalsy();
  });

  it('initVariable must be init', () => {
    const checkbox = element.querySelector('#initVariable') as HTMLInputElement;
    expect(component.initVariable).toEqual('Batman');
    expect(checkbox.checked).toBeTruthy();
  });

  ///////////////////////////////////////////


  it('variable after checked, variable must have value', () => {
    const checkbox = element.querySelector('#variable') as HTMLInputElement;
    checkbox.click();
    expect(component.variable).toEqual('Batman');
    expect(checkbox.checked).toBeTruthy();
  });

  it('variableComplex after checked, variable must have value', () => {
    const checkbox = element.querySelector('#variableComplex') as HTMLInputElement;
    checkbox.click();
    expect(component.variableComplex.name).toEqual('Batman');
    expect(checkbox.checked).toBeTruthy();
  });

  it('variableControl after checked, variable must have value', () => {
    const checkbox = element.querySelector('#variableControl') as HTMLInputElement;
    checkbox.click();
    expect(component.variableControl.value).toEqual('Batman');
    expect(checkbox.checked).toBeTruthy();
  });

  it('initVariable after checked, variable must have value', () => {
    const checkbox = element.querySelector('#initVariable') as HTMLInputElement;
    checkbox.click();
    expect(component.initVariable).toEqual('Wonder women');
    expect(checkbox.checked).toBeFalsy();
  });


  ///////////////////////////////////////////


  it('variable after checked, variable must have false value', () => {
    const checkbox = element.querySelector('#variable') as HTMLInputElement;
    checkbox.click(); checkbox.click();
    expect(component.variable).toEqual('Wonder women');
    expect(checkbox.checked).toBeFalsy();
  });

  it('variableComplex after checked, variable must have false value', () => {
    const checkbox = element.querySelector('#variableComplex') as HTMLInputElement;
    checkbox.click(); checkbox.click();
    expect(component.variableComplex.name).toEqual('Wonder women');
    expect(checkbox.checked).toBeFalsy();
  });

  it('variableControl after checked, variable must have false value', () => {
    const checkbox = element.querySelector('#variableControl') as HTMLInputElement;
    checkbox.click(); checkbox.click();
    expect(component.variableControl.value).toEqual('Wonder women');
    expect(checkbox.checked).toBeFalsy();
  });

  it('initVariable after checked, variable must have false value', () => {
    const checkbox = element.querySelector('#initVariable') as HTMLInputElement;
    checkbox.click(); checkbox.click();
    expect(component.initVariable).toEqual('Batman');
    expect(checkbox.checked).toBeTruthy();
  });

});
