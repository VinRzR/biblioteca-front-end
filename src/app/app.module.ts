import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { FormularioComponent } from './funcionarios/formulario/formulario.component';
import { FormularioComponentAssociado } from './associados/formulario/formulario.component';
import { FormularioPublicacaoComponent } from './publicacao/formulario-publicacao/formulario-publicacao.component';
import { FormularioExemplarComponent } from './exemplar/formulario-exemplar/formulario-exemplar.component';
import { ConsultarPublicacaoComponent } from './publicacao/consultar-publicacao/consultar-publicacao.component';
import { FormularioReservaComponent } from './reserva/formulario-reserva/formulario-reserva.component';
import { FormularioEmprestimoComponent } from './emprestimo/formulario-emprestimo/formulario-emprestimo.component';
import { RetirarReservaComponent } from './reserva/retirar-reserva/retirar-reserva.component';
import { ConsultarEmprestimoComponent } from './emprestimo/consultar-emprestimo/consultar-emprestimo.component';
import { RouterModule } from '@angular/router';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { HomeCroComponent } from './home-cro/home-cro.component';
import { DevolucaoEmprestimoComponent } from './emprestimo/devolucao-emprestimo/devolucao-emprestimo.component';
import { RelatorioAtrasadosComponent } from './emprestimo/relatorio-atrasados/relatorio-atrasados.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    LoginFuncionarioComponent,
    FormularioComponent,
    FormularioComponentAssociado,
    FormularioPublicacaoComponent,
    FormularioExemplarComponent,
    ConsultarPublicacaoComponent,
    FormularioReservaComponent,
    FormularioEmprestimoComponent,
    RetirarReservaComponent,
    ConsultarEmprestimoComponent,
    HomeAdmComponent,
    HomeCroComponent,
    DevolucaoEmprestimoComponent,
    RelatorioAtrasadosComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
