import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorExpedienteComponent } from './supervisor-expediente.component';

describe('SupervisorExpedienteComponent', () => {
  let component: SupervisorExpedienteComponent;
  let fixture: ComponentFixture<SupervisorExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
