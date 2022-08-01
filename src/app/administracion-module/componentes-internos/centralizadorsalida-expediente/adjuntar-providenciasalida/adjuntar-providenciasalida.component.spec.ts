/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdjuntarProvidenciasalidaComponent } from './adjuntar-providenciasalida.component';

describe('AdjuntarProvidenciasalidaComponent', () => {
  let component: AdjuntarProvidenciasalidaComponent;
  let fixture: ComponentFixture<AdjuntarProvidenciasalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjuntarProvidenciasalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjuntarProvidenciasalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
