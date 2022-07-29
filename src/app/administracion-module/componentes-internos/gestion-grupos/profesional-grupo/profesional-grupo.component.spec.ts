import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalGrupoComponent } from './profesional-grupo.component';

describe('ProfesionalGrupoComponent', () => {
  let component: ProfesionalGrupoComponent;
  let fixture: ComponentFixture<ProfesionalGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
