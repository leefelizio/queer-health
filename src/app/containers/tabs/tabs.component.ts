import { Component } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonAvatar } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-tabs',
  imports: [
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonAvatar
  ],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  constructor(
    private readonly _auth: Auth,
    private readonly _router: Router
  ) { }

  async signin() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this._auth, provider);

     console.log('credential tabs comp', credential);

    if(credential.user){
      this._router.navigateByUrl('/favorites')
    }
  }


}
