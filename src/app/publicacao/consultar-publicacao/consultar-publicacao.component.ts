import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Publicacao } from '../shared/publicacao';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consultar-publicacao',
  templateUrl: './consultar-publicacao.component.html',
  styleUrls: ['./consultar-publicacao.component.css'],
})
export class ConsultarPublicacaoComponent implements OnInit {
  exemplares: any;
  formPublicacao: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.createForm(new Publicacao());
  }
  createForm(publicacao: Publicacao) {
    this.formPublicacao = this.formBuilder.group({
      isbn: [publicacao.isbn],
    });
  }
  onSubmit() {
    this.http
      .get<any>(
        `https://biblioteca-back-end.herokuapp.com/exemplars/consulta/${
          this.formPublicacao.get('isbn').value
        }`
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.exemplares = data;
        },
        (error) => alert('ocorreu um erro, tente novamente!')
      );
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formPublicacao.value);
    // Usar o método reset para limpar os controles na tela
    this.formPublicacao.reset(new Publicacao());
  }
}
