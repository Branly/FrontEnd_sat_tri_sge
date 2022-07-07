import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidenteExpedienteComponent } from './presidente-expediente.component';

describe('PresidenteExpedienteComponent', () => {
  let component: PresidenteExpedienteComponent;
  let fixture: ComponentFixture<PresidenteExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidenteExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidenteExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
