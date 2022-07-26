import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarReservaComponent } from './retirar-reserva.component';

describe('RetirarReservaComponent', () => {
  let component: RetirarReservaComponent;
  let fixture: ComponentFixture<RetirarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirarReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetirarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
