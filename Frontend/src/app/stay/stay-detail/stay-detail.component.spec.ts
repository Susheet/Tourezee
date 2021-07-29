import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayDetailComponent } from './stay-detail.component';

describe('StayDetailComponent', () => {
  let component: StayDetailComponent;
  let fixture: ComponentFixture<StayDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
