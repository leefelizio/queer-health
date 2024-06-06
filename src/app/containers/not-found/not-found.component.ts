import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel,
         IonRippleEffect, IonImg, IonThumbnail, IonText, IonSegmentButton,
         IonSegment,IonCard, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol,
         IonCardSubtitle, IonCardContent, IonButton
        } 
        from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-not-found',
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
    IonSegment,
    IonSegmentButton,
    IonCard, 
    IonCardHeader,
    IonCardTitle, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    CommonModule,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})

export class NotFoundComponent {
categories!: any;

  constructor(apiService: ApiService){

    // apiService.
    apiService.getData().then((database) => {
      console.log('database', database);
     // to do a skeleton test, deactivate data below
     this.categories = database.data;

     // this.city = database.data.find(obj => obj.professionals)
     // this.selectedCity = database.data[0].professionals[0].city;

     console.log('categories', this.categories)
     // console.log('city', this.city)

   });

  }
}
