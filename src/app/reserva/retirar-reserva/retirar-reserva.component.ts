import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reserva } from '../shared/reserva';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retirar-reserva',
  templateUrl: './retirar-reserva.component.html',
  styleUrls: ['./retirar-reserva.component.css'],
})
export class RetirarReservaComponent implements OnInit {
  formReserva: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm(new Reserva());
  }
  createForm(reserva: Reserva) {
    this.formReserva = this.formBuilder.group({
      codigo_assoc: [reserva.codigo_assoc],
    });
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formReserva.value);
    // Usar o método reset para limpar os controles na tela
    this.formReserva.reset(new Reserva());
  }
}
