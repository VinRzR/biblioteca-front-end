import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Publicacao } from '../shared/publicacao';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-publicacao',
  templateUrl: './formulario-publicacao.component.html',
  styleUrls: ['./formulario-publicacao.component.css'],
})
export class FormularioPublicacaoComponent implements OnInit {
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
      titulo: [publicacao.titulo],
      autor: [publicacao.autor],
      editora: [publicacao.editora],
    });
  }

  onSubmit() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/publicacaos',
        this.formPublicacao.value
      )
      .subscribe((data) => {
        console.log(data);
        alert('publicação cadastrada');
      });
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formPublicacao.value);
    // Usar o método reset para limpar os controles na tela
  }
}
