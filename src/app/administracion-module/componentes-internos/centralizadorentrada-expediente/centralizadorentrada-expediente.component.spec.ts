import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizadorentradaExpedienteComponent } from './centralizadorentrada-expediente.component';

describe('CentralizadorentradaExpedienteComponent', () => {
  let component: CentralizadorentradaExpedienteComponent;
  let fixture: ComponentFixture<CentralizadorentradaExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralizadorentradaExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizadorentradaExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
