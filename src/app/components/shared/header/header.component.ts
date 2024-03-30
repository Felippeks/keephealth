import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  diet() {
    this.router.navigate(['/diet']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }
  cadastro() {
    this.router.navigate(['/cadastro']);
  }

  home() {
    this.router.navigate(['/home']);
  }
}
