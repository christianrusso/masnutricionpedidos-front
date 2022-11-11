import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVAComponent } from './iva.component';

describe('IVAComponent', () => {
  let component: IVAComponent;
  let fixture: ComponentFixture<IVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
