import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorExpedienteComponent } from './coordinador-expediente.component';

describe('CoordinadorExpedienteComponent', () => {
  let component: CoordinadorExpedienteComponent;
  let fixture: ComponentFixture<CoordinadorExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinadorExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
