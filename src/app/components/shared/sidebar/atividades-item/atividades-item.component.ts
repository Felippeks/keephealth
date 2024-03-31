import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../../../../services/atividades.service';

export interface Atividade {
  tipo: string;
  data: Date;
  distancia?: number;
  tempo?: number;
}

@Component({
  selector: 'app-atividades-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atividades-item.component.html',
  styleUrl: './atividades-item.component.scss',
})
export class AtividadesItemComponent implements OnInit {
  atividades: Atividade[] = [];

  constructor(private atividadesService: AtividadesService) {}

  ngOnInit() {
    this.atividadesService.atividades$.subscribe((atividades) => {
      this.atividades = atividades;
    });
  }

  getAtividades() {
    const atividades = localStorage.getItem('atividades');
    if (atividades) {
      this.atividades = JSON.parse(atividades);
    }
  }

  getImagemAtividade(tipo: string) {
    const imagens: { [key: string]: string } = {
      Corrida:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrU0xozZUTkHO9xqPUz2wM_5mfF_XC-Hf3kDPWC9oGuNdDxf1UpG6GeCKU2xA40zmtrL8&usqp=CAU',
      Caminhada: 'url_da_imagem_caminhada',
    };
    return imagens[tipo];
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
    localStorage.setItem('atividades', JSON.stringify(this.atividades));
  }
}
