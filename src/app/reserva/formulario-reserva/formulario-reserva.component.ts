import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reserva } from '../shared/reserva';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css'],
})
export class FormularioReservaComponent implements OnInit {
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
      codigo: [reserva.codigo],
      isbn: [reserva.isbn],
      codigo_assoc: [reserva.codigo_assoc],
      status: 'Iniciado',
    });
  }
  onSubmit() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/reservas',
        this.formReserva.value
      )
      .subscribe((data) => {
        console.log(data);
      });
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formReserva.value);
    // Usar o método reset para limpar os controles na tela
    this.formReserva.reset(new Reserva());
  }
}
