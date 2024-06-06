import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { signInWithPopup } from '@firebase/auth';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
         IonRippleEffect, IonImg, IonThumbnail, IonText,
         IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
         IonGrid, IonRow, IonCol, IonAvatar, IonButton, IonIcon
        } from '@ionic/angular/standalone'
import { ApiService } from '../../services/api.service';
import { FirestoreService } from '../../services/firestore.service';
import { CommonModule } from '@angular/common';

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
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Tab1Component {
  categories!: any;

  constructor(
    apiService: ApiService,
    private readonly _router: Router,
    private readonly _auth: Auth,
    ) { 
    // get cats 
    apiService.getData().then((database) => {
      this.categories = database.data;
    });
  }

  async signin() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this._auth, provider);

    // search for 'uuid' in log
     console.log('credential', credential);

    if(credential.user){
      this._router.navigateByUrl('/favorites')
    }
  }
}
