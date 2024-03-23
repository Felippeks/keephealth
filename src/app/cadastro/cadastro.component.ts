import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component"; 

@Component({
    selector: 'app-cadastro',
    standalone: true,
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.scss',
    imports: [ReactiveFormsModule, FormsModule, SidebarComponent]
})
export class CadastroComponent {
  cadastroForm: FormGroup | any;

  constructor(private router: Router) {
    this.cadastroForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      if (
        this.cadastroForm.value.password ===
        this.cadastroForm.value.confirmPassword
      ) {
        localStorage.setItem(
          this.cadastroForm.value.email,
          this.cadastroForm.value.password,
        );
        alert('Usuário cadastrado com sucesso!');
      } else {
        alert('As senhas não correspondem!');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  }

  backLogin() {
    this.router.navigate(['/login']);
  }
}
