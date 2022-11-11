import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesVentaComponent } from './condiciones-venta.component';

describe('CondicionesVentaComponent', () => {
  let component: CondicionesVentaComponent;
  let fixture: ComponentFixture<CondicionesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
