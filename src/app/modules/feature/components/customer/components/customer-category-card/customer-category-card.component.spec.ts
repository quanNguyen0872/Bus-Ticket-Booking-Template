import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCategoryCardComponent } from './customer-category-card.component';

describe('CustomerCategoryCardComponent', () => {
  let component: CustomerCategoryCardComponent;
  let fixture: ComponentFixture<CustomerCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCategoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
