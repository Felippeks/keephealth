import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { AgePipe } from '../../pipes/age.pipe';
import { HeightPipe } from '../../pipes/height.pipe';
import { CepService } from '../../services/address.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [HeaderComponent, AgePipe, HeightPipe],
})
export class ProfileComponent implements OnInit {
  userData: any;
  userAddress: string | undefined;

  constructor(private cepService: CepService) {} // Injete o serviço

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.getAddress(this.userData.location);
  }

  getAddress(cep: string) {
    this.cepService.get(cep).subscribe((data: any) => {
      if (!data.erro) {
        this.userAddress = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
      }
    });
  }
}
