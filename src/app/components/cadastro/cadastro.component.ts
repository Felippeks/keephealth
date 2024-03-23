import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
  imports: [ReactiveFormsModule, FormsModule],
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
      weight: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      userCode: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
    });
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      if (
        this.cadastroForm.value.password ===
        this.cadastroForm.value.confirmPassword
      ) {
        let formData = { ...this.cadastroForm.value };

        delete formData.location;

        localStorage.setItem('userData', JSON.stringify(formData));

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