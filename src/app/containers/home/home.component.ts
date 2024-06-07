import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, user } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { signInWithPopup } from '@firebase/auth';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
         IonRippleEffect, IonImg, IonThumbnail, IonText,
         IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
         IonGrid, IonRow, IonCol, IonAvatar, IonButton, IonIcon
        } from '@ionic/angular/standalone'
import { ApiService } from '../../services/api.service';
import { FirestoreService } from '../../services/firestore.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SignInComponent } from '../../sign-in/sign-in.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { IsAuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, 
    IonItem,
    IonLabel,
    IonRippleEffect,
    IonImg,
    IonThumbnail,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon, 
    CommonModule, 
    RouterLink,
    SignInComponent,
    WelcomeComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories!: any;

  constructor(
    apiService: ApiService,
    public _isAuth:IsAuthService    
    ) { 
    // get cats 
    apiService.getData().then((database) => {
      this.categories = database.data;
    });
  
  }
}
