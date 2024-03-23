import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, SidebarComponent]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email && localStorage.getItem(email) === password) {
        this.router.navigate(['/home']);
      } else {
        alert('Usuário ou senha inválidos');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }

  onForgotPassword() {
    const email = this.loginForm.get('email')?.value;

    if (email && localStorage.getItem(email)) {
      localStorage.setItem(email, 'a1b2c4d4');
      alert(
        'Sua senha foi alterada para a senha padrão: a1b2c4d4. Por favor, prossiga utilizando essa senha.',
      );
    } else {
      alert('Email não encontrado');
    }
  }

  onRegister() {
    this.router.navigate(['/cadastro']);
  }
}
