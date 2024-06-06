import { Component, Input, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
        IonCard, IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle,
        IonCardContent,IonButton
      } from '@ionic/angular/standalone';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    IonCard, IonCardHeader, IonAvatar, IonCardTitle, IonCardSubtitle,
    IonCardContent,IonButton
],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  @Input() headline!: string;

  constructor(
    private readonly _router: Router,
    private readonly _auth: Auth,
  ) { }

  async signin() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this._auth, provider);
    
    console.log('credential sign-in component', credential);
    
    if(credential.user){
      this._router.navigateByUrl('/favorites')
    }
  }
}
