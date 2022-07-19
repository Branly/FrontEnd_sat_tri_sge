import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioProvidenciaComponent } from './comentario-providencia.component';

describe('ComentarioProvidenciaComponent', () => {
  let component: ComentarioProvidenciaComponent;
  let fixture: ComponentFixture<ComentarioProvidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioProvidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioProvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
