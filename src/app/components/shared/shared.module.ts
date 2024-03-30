import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent], //declarar o componente
  imports: [
    //so importar o que era importado para uso do componente, nesse caso ele não usava nada.
  ],
  exports: [HeaderComponent], //exportar o componente
})
export class SharedModule {}
