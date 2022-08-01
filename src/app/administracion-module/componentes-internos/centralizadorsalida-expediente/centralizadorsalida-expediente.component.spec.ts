/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CentralizadorsalidaExpedienteComponent } from './centralizadorsalida-expediente.component';

describe('CentralizadorsalidaExpedienteComponent', () => {
  let component: CentralizadorsalidaExpedienteComponent;
  let fixture: ComponentFixture<CentralizadorsalidaExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralizadorsalidaExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizadorsalidaExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
