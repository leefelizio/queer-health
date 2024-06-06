import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { IonCard, IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle, 
          IonCardContent, IonButton, IonHeader, IonToolbar, IonTitle, 
          IonContent, IonBackButton
        } from '@ionic/angular/standalone';
import { SignInComponent } from '../../sign-in/sign-in.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonAvatar, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    RouterLink, 
    SignInComponent, 
  ]
})
export class LoginComponent {

  constructor() { }
  
}