import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import './diets.mock';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

export interface Diets {
  id: number;
  name: string;
  description: string;
  qttCalories: number;
  qttDaysFeed: number;
  imageLink: string;
}

@Component({
  selector: 'app-diet',
  standalone: true,
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss',
  imports: [
    HeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
  ],
})
export class DietComponent implements OnInit, OnDestroy {
  listLoad: Diets[] = [];
  list: Diets[] = [];
  inputPesquisa = new FormControl('');

  current = 0;
  timerId: any;

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.next();
    }, 5000);

    let dietsData = localStorage.getItem('diets');
    if (dietsData) {
      this.listLoad = JSON.parse(dietsData) as Diets[];
      this.list = this.listLoad;
    } else {
      alert('Dieta não encontrada');
    }

    this.inputPesquisa.valueChanges.subscribe((val) => {
      this.pesquisa(val || '');
    });
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  previous() {
    if (this.current > 0) {
      this.current--;
    }
  }

  next() {
    if (this.current < this.list.length - 1) {
      this.current++;
    } else {
      this.current = 0;
    }
  }

  pesquisa(val: string) {
    if (val.length > 0) {
      this.list = this.listLoad.filter((x) =>
        x.name.toLowerCase().includes(val.toLowerCase()),
      );
    } else {
      this.list = this.listLoad;
    }
  }

  goToSlide(index: number) {
    this.current = index;
  }
  
  constructor(private router: Router) {}
  goToDetails(id: number) {
    this.router.navigate(['/diet', id]);
  }
}
