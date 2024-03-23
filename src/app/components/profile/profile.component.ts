import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AgePipe } from '../../pipes/age.pipe';
import { HeightPipe } from '../../pipes/height.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [HeaderComponent, AgePipe, HeightPipe],
})
export class ProfileComponent implements OnInit {
  userData: any;
  constructor() {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
  }
}
