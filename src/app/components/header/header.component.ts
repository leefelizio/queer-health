import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonBackButton, IonTitle, IonMenuButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IsAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonBackButton, 
    IonTitle, 
    IonMenuButton,
    IonIcon,
    RouterLink,
    AsyncPipe
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title?: string;

  constructor(public auth:IsAuthService){}

}
