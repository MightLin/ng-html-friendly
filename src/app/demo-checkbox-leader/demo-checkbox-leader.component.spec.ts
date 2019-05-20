import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckboxLeaderComponent } from './demo-checkbox-leader.component';

describe('DemoCheckboxLeaderComponent', () => {
  let component: DemoCheckboxLeaderComponent;
  let fixture: ComponentFixture<DemoCheckboxLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCheckboxLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckboxLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
