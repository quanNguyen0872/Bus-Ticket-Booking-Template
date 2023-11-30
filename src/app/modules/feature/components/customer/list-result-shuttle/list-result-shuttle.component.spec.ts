import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultShuttleComponent } from './list-result-shuttle.component';

describe('ListResultShuttleComponent', () => {
  let component: ListResultShuttleComponent;
  let fixture: ComponentFixture<ListResultShuttleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResultShuttleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResultShuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
