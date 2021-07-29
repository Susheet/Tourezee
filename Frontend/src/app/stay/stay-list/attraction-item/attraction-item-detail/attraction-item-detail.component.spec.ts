import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionItemDetailComponent } from './attraction-item-detail.component';

describe('AttractionItemDetailComponent', () => {
  let component: AttractionItemDetailComponent;
  let fixture: ComponentFixture<AttractionItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
