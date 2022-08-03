import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearColaboradorComponent } from './dialog-crear-colaborador.component';

describe('DialogCrearColaboradorComponent', () => {
  let component: DialogCrearColaboradorComponent;
  let fixture: ComponentFixture<DialogCrearColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
