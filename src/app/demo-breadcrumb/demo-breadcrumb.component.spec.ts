import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBreadcrumbComponent } from './demo-breadcrumb.component';

describe('DemoBreadcrumbComponent', () => {
  let component: DemoBreadcrumbComponent;
  let fixture: ComponentFixture<DemoBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
