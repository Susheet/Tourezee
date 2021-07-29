import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayItemComponent } from './stay-item.component';

describe('StayItemComponent', () => {
  let component: StayItemComponent;
  let fixture: ComponentFixture<StayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
