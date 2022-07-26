import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmprestimoComponent } from './formulario-emprestimo.component';

describe('FormularioEmprestimoComponent', () => {
  let component: FormularioEmprestimoComponent;
  let fixture: ComponentFixture<FormularioEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
