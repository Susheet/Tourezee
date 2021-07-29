import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayFiltersComponent } from './stay-filters.component';

describe('StayFiltersComponent', () => {
  let component: StayFiltersComponent;
  let fixture: ComponentFixture<StayFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
