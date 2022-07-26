import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emprestimo } from '../shared/emprestimo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-emprestimo',
  templateUrl: './formulario-emprestimo.component.html',
  styleUrls: ['./formulario-emprestimo.component.css'],
})
export class FormularioEmprestimoComponent implements OnInit {
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
      nro_exemplar: [emprestimo.nro_exemplar],
      isbn: [emprestimo.isbn],
      codigo_assoc: [emprestimo.codigo_assoc],
    });
  }
  onSubmit() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/emprestimos',
        this.formEmprestimo.value
      )
      .subscribe((data) => {
        console.log(data);
      });
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formEmprestimo.value);
    // Usar o método reset para limpar os controles na tela
    this.formEmprestimo.reset(new Emprestimo());
  }
}
