import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent], //declarar o componente
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
  ],
  exports: [HeaderComponent, SidebarComponent], //exportar o componente
})
export class SharedModule {}
