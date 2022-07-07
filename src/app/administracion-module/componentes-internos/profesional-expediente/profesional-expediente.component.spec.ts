import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalExpedienteComponent } from './profesional-expediente.component';

describe('ProfesionalExpedienteComponent', () => {
  let component: ProfesionalExpedienteComponent;
  let fixture: ComponentFixture<ProfesionalExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
