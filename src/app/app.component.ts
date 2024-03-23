import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'keephealth';

  array: any[] = [
    {
      id: 1,
      name: 'Abacate',
      description: '...',
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: '',  
    },
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('data', JSON.stringify(this.array));
    }
  }
}