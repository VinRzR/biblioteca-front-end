import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAtrasadosComponent } from './relatorio-atrasados.component';

describe('RelatorioAtrasadosComponent', () => {
  let component: RelatorioAtrasadosComponent;
  let fixture: ComponentFixture<RelatorioAtrasadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioAtrasadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioAtrasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
