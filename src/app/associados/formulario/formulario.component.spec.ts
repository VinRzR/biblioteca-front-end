import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponentAssociado } from './formulario.component';

describe('FormularioComponentAssociado', () => {
  let component: FormularioComponentAssociado;
  let fixture: ComponentFixture<FormularioComponentAssociado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponentAssociado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComponentAssociado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
