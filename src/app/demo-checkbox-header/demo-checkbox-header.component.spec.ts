import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckboxHeaderComponent } from './demo-checkbox-header.component';

describe('DemoCheckboxHeaderComponent', () => {
  let component: DemoCheckboxHeaderComponent;
  let fixture: ComponentFixture<DemoCheckboxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCheckboxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
