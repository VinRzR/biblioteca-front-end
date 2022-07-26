import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionarios } from '../shared/funcionarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-funcionario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formFuncionario: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm(new Funcionarios());
  }
  createForm(funcionario: Funcionarios) {
    this.formFuncionario = this.formBuilder.group({
      nome: [funcionario.nome],
      funcao: [funcionario.funcao],
      email: [funcionario.email],
      senha: [funcionario.senha],
    });
  }
  onSubmit() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/funcionarios',
        this.formFuncionario.value
      )
      .subscribe((data) => {
        console.log(data);
      });
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formFuncionario.value);
    // Usar o método reset para limpar os controles na tela
  }
}
