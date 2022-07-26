import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExemplarComponent } from './formulario-exemplar.component';

describe('FormularioExemplarComponent', () => {
  let component: FormularioExemplarComponent;
  let fixture: ComponentFixture<FormularioExemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioExemplarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioExemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
