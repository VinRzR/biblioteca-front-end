import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPublicacaoComponent } from './formulario-publicacao.component';

describe('FormularioPublicacaoComponent', () => {
  let component: FormularioPublicacaoComponent;
  let fixture: ComponentFixture<FormularioPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPublicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
