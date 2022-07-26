import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { DevolucaoEmprestimoComponent } from './emprestimo/devolucao-emprestimo/devolucao-emprestimo.component';
import { HomeAdmComponent } from './home-adm/home-adm.component';
import { HomeCroComponent } from './home-cro/home-cro.component';
import { RelatorioAtrasadosComponent } from './emprestimo/relatorio-atrasados/relatorio-atrasados.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homeadm', component: HomeAdmComponent },
  { path: 'homecro', component: HomeCroComponent },
  { path: 'loginfunc', component: LoginFuncionarioComponent },
  { path: 'formfunc', component: FormularioComponent },
  { path: 'formassoc', component: FormularioComponentAssociado },
  { path: 'formpub', component: FormularioPublicacaoComponent },
  { path: 'formexe', component: FormularioExemplarComponent },
  { path: 'conspub', component: ConsultarPublicacaoComponent },
  { path: 'formres', component: FormularioReservaComponent },
  { path: 'formemp', component: FormularioEmprestimoComponent },
  { path: 'retres', component: RetirarReservaComponent },
  { path: 'consemp', component: ConsultarEmprestimoComponent },
  { path: 'devemp', component: DevolucaoEmprestimoComponent },
  { path: 'relatr', component: RelatorioAtrasadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
