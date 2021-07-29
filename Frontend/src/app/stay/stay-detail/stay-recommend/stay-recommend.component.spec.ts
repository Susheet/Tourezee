import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayRecommendComponent } from './stay-recommend.component';

describe('StayRecommendComponent', () => {
  let component: StayRecommendComponent;
  let fixture: ComponentFixture<StayRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
