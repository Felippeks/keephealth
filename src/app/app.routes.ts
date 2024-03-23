import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'login'},
  {path: 'login',component: LoginComponent,},
  {path: 'home', component: HomeComponent,},
  {path: 'cadastro',component: CadastroComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }