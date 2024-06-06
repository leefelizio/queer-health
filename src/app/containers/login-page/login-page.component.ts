import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonCard, IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonAvatar, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton 
  ]
})
export class LoginPageComponent {

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
