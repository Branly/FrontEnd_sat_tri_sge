import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaExpedienteComponent } from './especialista-expediente.component';

describe('EspecialistaExpedienteComponent', () => {
  let component: EspecialistaExpedienteComponent;
  let fixture: ComponentFixture<EspecialistaExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialistaExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
