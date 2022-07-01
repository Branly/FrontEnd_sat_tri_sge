import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionExpedienteComponent } from './recepcion-expediente.component';

describe('RecepcionExpedienteComponent', () => {
  let component: RecepcionExpedienteComponent;
  let fixture: ComponentFixture<RecepcionExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionExpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
