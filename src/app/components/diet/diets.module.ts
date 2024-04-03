import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietComponent } from './diet.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { RouterModule, Routes } from '@angular/router';

const dietsRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DietComponent },
      { path: ':id', component: DietDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(dietsRoutes)],
})
export class DietsModule {}
