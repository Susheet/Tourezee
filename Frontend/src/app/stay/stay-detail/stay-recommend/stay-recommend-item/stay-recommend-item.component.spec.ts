import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayRecommendItemComponent } from './stay-recommend-item.component';

describe('StayRecommendItemComponent', () => {
  let component: StayRecommendItemComponent;
  let fixture: ComponentFixture<StayRecommendItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayRecommendItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayRecommendItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
