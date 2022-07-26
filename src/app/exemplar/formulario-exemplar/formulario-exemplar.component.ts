import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exemplar } from '../shared/exemplar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-exemplar',
  templateUrl: './formulario-exemplar.component.html',
  styleUrls: ['./formulario-exemplar.component.css'],
})
export class FormularioExemplarComponent implements OnInit {
  formExemplar: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm(new Exemplar());
  }
  createForm(exemplar: Exemplar) {
    this.formExemplar = this.formBuilder.group({
      numero: [exemplar.numero],
      isbn: [exemplar.isbn],
      preco: [exemplar.preco],
    });
  }
  onSubmit() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/exemplars',
        this.formExemplar.value
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => alert('ocorreu um erro, tente novamente!')
      );
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formExemplar.value);
    // Usar o método reset para limpar os controles na tela
  }
}
