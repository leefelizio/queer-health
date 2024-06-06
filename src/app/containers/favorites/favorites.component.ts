import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton,
          IonCardSubtitle, IonToolbar, IonTitle, IonList, IonItem, IonListHeader, IonLabel, 
        } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    IonHeader,
    IonContent, 
    IonCard, 
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonToolbar,
    IonItem, IonButton,
    IonTitle, IonList, IonListHeader, IonLabel,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  title!: string;
  categories!: any[]; 
  selectedCategorie!: any; 
  professional!: any;
  favs$ = this.firestoreService.loadData();
  

  constructor(apiService: ApiService, public firestoreService: FirestoreService) { 
    // get data
    apiService.getData().then((database) => {
       console.log('database', database);
      // to do a skeleton test, deactivate data below
      this.title = database.title;
      this.categories = database.data;

      // this.city = database.data.find(obj => obj.professionals)
      // this.selectedCity = database.data[0].professionals[0].city;
      this.selectedCategorie = database.data[0];

      console.log('cat', this.categories)
      console.log('title', this.title)

    });
  }

  async toggleFavorite(professional: any) {
    const {uuid, title} = professional;
    const favs = await firstValueFrom(this.firestoreService.loadData()) ;
    const { id } = favs.find(({favorite}) => favorite.uuid === uuid)||{};
    if(id){
      this.firestoreService.removeData(id)
    }else{
      this.firestoreService.addData({uuid, title});
    }
  }

}
