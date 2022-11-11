import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglaComercialComponent } from './regla-comercial.component';

describe('ReglaComercialComponent', () => {
  let component: ReglaComercialComponent;
  let fixture: ComponentFixture<ReglaComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglaComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
