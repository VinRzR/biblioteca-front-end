import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Associados } from '../shared/associados';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-associado',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponentAssociado implements OnInit {
  formAssociado: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm(new Associados());
  }
  createForm(associado: Associados) {
    this.formAssociado = this.formBuilder.group({
      nome: [associado.nome],
      endereco: [associado.endereco],
      email: [associado.email],
      status: [associado.status],
      senha: [associado.senha],
    });
  }
  onSubmit() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/associados',
        this.formAssociado.value
      )
      .subscribe((data) => {
        console.log(data);
      });
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formAssociado.value);
    // Usar o método reset para limpar os controles na tela
    this.formAssociado.reset(new Associados());
  }
}
