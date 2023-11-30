import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketCardComponent } from './customer-ticket-card.component';

describe('CustomerTicketCardComponent', () => {
  let component: CustomerTicketCardComponent;
  let fixture: ComponentFixture<CustomerTicketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTicketCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
