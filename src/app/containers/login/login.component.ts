import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { IonCard, IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle, 
          IonCardContent, IonButton, IonHeader, IonToolbar, IonTitle, IonContent 
        } from '@ionic/angular/standalone';

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
    RouterLink
  ]
})
export class LoginComponent {

  constructor(
    private readonly _auth: Auth,
    private readonly _router: Router
  ) { }

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
