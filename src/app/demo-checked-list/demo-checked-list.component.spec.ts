import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckedListComponent } from './demo-checked-list.component';

describe('DemoCheckedListComponent', () => {
  let component: DemoCheckedListComponent;
  let fixture: ComponentFixture<DemoCheckedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCheckedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
