import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
interface Atividade {
  tipo: string;
  data: Date;
  distancia?: number;
  tempo?: number;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  visible = false;
  tiposAtividade = [
    'Corrida',
    'Caminhada',
    'Natação',
    'Ciclismo',
    'Musculação',
    'Crossfit',
    'Yoga',
    'Pilates',
  ];
  atividade: Atividade = { tipo: '', data: new Date() };
  atividades: Atividade[] = [];

  showDialog() {
    this.visible = true;
  }

  salvarAtividade() {
    if (this.atividade.tipo && this.atividade.data) {
      this.atividades.push(this.atividade);
      localStorage.setItem('atividades', JSON.stringify(this.atividades));
      this.atividade = { tipo: '', data: new Date() };
      this.visible = false;
    } else {
      alert('Por favor, preencha todos os campos necessários.');
    }
  }
}
