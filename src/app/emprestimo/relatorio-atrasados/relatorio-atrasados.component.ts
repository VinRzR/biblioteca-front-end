import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emprestimo } from '../shared/emprestimo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorio-atrasados',
  templateUrl: './relatorio-atrasados.component.html',
  styleUrls: ['./relatorio-atrasados.component.css'],
})
export class RelatorioAtrasadosComponent implements OnInit {
  atrasados: any;
  formEmprestimo: FormGroup;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://biblioteca-back-end.herokuapp.com/emprestimos/atrasados'
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.atrasados = data;
        },
        (error) => alert('ocorreu um erro, tente novamente!')
      );
  }
  // createForm(emprestimo: Emprestimo) {
  //   this.formEmprestimo = this.formBuilder.group({
  //     nro_exemplar: [emprestimo.nro_exemplar],
  //     isbn: [emprestimo.isbn],
  //     codigo_assoc: [emprestimo.codigo_assoc],
  //   });
  // }
}
