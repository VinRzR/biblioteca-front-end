import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emprestimo } from '../shared/emprestimo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-emprestimo',
  templateUrl: './consultar-emprestimo.component.html',
  styleUrls: ['./consultar-emprestimo.component.css'],
})
export class ConsultarEmprestimoComponent implements OnInit {
  emprestimos;
  formEmprestimo: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm(new Emprestimo());
  }
  createForm(emprestimo: Emprestimo) {
    this.formEmprestimo = this.formBuilder.group({
      codigo_assoc: [emprestimo.codigo_assoc],
    });
  }
  onSubmit() {
    this.http
      .get<any>(
        `https://biblioteca-back-end.herokuapp.com/emprestimos/consulta/${
          this.formEmprestimo.get('codigo_assoc').value
        }`
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.emprestimos = data;
        },
        (error) => alert('ocorreu um erro, tente novamente!')
      );
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formEmprestimo.value);
    // Usar o método reset para limpar os controles na tela
    this.formEmprestimo.reset(new Emprestimo());
  }
}
