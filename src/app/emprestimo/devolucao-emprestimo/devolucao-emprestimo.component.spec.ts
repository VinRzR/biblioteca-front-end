import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoEmprestimoComponent } from './devolucao-emprestimo.component';

describe('DevolucaoEmprestimoComponent', () => {
  let component: DevolucaoEmprestimoComponent;
  let fixture: ComponentFixture<DevolucaoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucaoEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucaoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
