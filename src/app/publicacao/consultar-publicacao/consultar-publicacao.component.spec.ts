import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPublicacaoComponent } from './consultar-publicacao.component';

describe('ConsultarPublicacaoComponent', () => {
  let component: ConsultarPublicacaoComponent;
  let fixture: ComponentFixture<ConsultarPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPublicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
