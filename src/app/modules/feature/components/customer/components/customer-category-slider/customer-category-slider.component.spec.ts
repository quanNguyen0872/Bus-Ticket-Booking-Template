import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCategorySliderComponent } from './customer-category-slider.component';

describe('CustomerCategorySliderComponent', () => {
  let component: CustomerCategorySliderComponent;
  let fixture: ComponentFixture<CustomerCategorySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCategorySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCategorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
