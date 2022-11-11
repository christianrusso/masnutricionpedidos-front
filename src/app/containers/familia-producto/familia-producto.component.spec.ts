import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaProductoComponent } from './familia-producto.component';

describe('FamiliaProductoComponent', () => {
  let component: FamiliaProductoComponent;
  let fixture: ComponentFixture<FamiliaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliaProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
