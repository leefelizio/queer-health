import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent,  IonList, IonItem, IonLabel,
         IonGrid, IonRow, IonCol, IonAvatar, IonButton, IonIcon, IonSegment,
         IonSegmentButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
         IonCardContent, IonSelect, IonSelectOption
        } from '@ionic/angular/standalone';
import { RouterLink} from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FilterByCategoryPipe } from '../../pipes/filterByCategoryPipe/filter-by-category.pipe';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { firstValueFrom } from 'rxjs';
import { IsFavoritePipe } from '../../pipes/isFavorite/is-favorite.pipe';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, 
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonButton,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSelect,
    IonSelectOption,
    RouterLink,
    FilterByCategoryPipe,
    CommonModule,
    IsFavoritePipe
  ],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent {
  title!: string;
  categories!: any[]; 
  selectedCategorie!: any; 
  city!: any[];
  selectedCity!: any; 
  // professionals!: any[];
  favs$ = this.firestoreService.loadData();

  constructor(apiService: ApiService, public firestoreService: FirestoreService) { 
    // get data
    apiService.getData().then((database) => {
      console.log('database', database);

      this.title = database.title;
      this.categories = database.data;
      this.selectedCategorie = database.data[0];
      console.log('cat', this.categories)

      this.city = database.data.find(obj => obj.professionals)
      // this.selectedCity = database.data[0].professionals[0].city;
      console.log('city', this.city)

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

