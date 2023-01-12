import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderFormComponent } from './detail-order-form.component';

describe('DetailOrderFormComponent', () => {
  let component: DetailOrderFormComponent;
  let fixture: ComponentFixture<DetailOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
