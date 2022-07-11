import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoExpedienteComponent } from './prestamo-expediente.component';

describe('PrestamoExpedienteComponent', () => {
  let component: PrestamoExpedienteComponent;
  let fixture: ComponentFixture<PrestamoExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
