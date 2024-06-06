import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonHeader, IonContent, IonAvatar, IonButton, IonTitle, IonText, IonIcon, IonToolbar } from '@ionic/angular/standalone';
import 'share-api-polyfill'

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonAvatar,
    IonButton,
    IonTitle, 
    IonText,
    IonIcon,
    IonToolbar,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  title!:string;
  uuid!:string;
  professional!:any;

  constructor(route: ActivatedRoute, service: ApiService) { 
    const professionalUuid = route.snapshot.params['uuid'];
    
    this.uuid = professionalUuid;
    service.getData().then(
      database => {
        const c = database.data.find((c: any) => c.professionals.find((r: any) => r.uuid === this.uuid))
        const r = c.professionals.find((r: any) => r.uuid === this.uuid)
        
        this.professional = r;

      }
    )
     console.log(professionalUuid)
     console.log(route.snapshot)
  }

  displayShare() {
    navigator.share({
      title: this.title + ' | QueerHealth',
      url: location.href
    })
    .then( _ => console.log('Yay, you shared it :)'))
    .catch( error => console.log('Oh noh! You couldn\'t share it! :\'(\n', error));
  }
}
