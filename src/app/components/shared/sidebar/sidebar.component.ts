import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  visible: boolean = false;
  tiposAtividade: string[] = ['Corrida', 'Caminhada', 'Natação', 'Ciclismo', 'Musculação', 'Crossfit', 'Yoga', 'Pilates'];
  atividade: any = {};
  atividades: any[] = [];

  showDialog() {
    this.visible = true;
  }

  salvarAtividade() {
    this.atividades.push(this.atividade);
    localStorage.setItem('atividades', JSON.stringify(this.atividades));
    this.atividade = {};
    this.visible = false;
  }
}
