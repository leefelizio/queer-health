import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { ApiService } from './api.service';
import { map, switchMap } from 'rxjs';

// On this file, we mix the JSON with the DATABASE
// on the database we have only the quantity and the UUID
// that is enough. it is cheaper to have less things on the DB
// then here we can get the rest of the details on the JSON
// having the ID by reference

// it is better to have this code inside a service instead of
// a pipe because pipe I would do the query line by line when using it
// here we do just once
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(
    private readonly firestoreService: FirestoreService,
    private readonly apiService: ApiService
  ) { }

  loadData(){
    // this.firestoreService.loadData() is a observable
    // pipe, I can enter on my observable/ on my data and 
    // to do something (almost like a then() in a promise)
    // that I can do something before the return
    // flatMap is for an array inside an array
    return this.firestoreService.loadData().pipe(
      switchMap(async(datas) => {
        const apiData =  await this.apiService.getData();

        // here we go trhough all the favorites
        return datas.flatMap((favorite:any) => {

          // here all the favorite values
          const value = favorite['favorite'].map(async (item: any) => {

            // search the category that corresponds to the professional uuid
           const category = apiData.data.find(
            cat => cat.itemUuids.find(
              (uuid: any) => item.professional.uuid
              )
            );

            // here we search the detail of the professional that is on that category
            const professionalFull = category.professionals.find((professional: any) => professional.uuid === item.professional.uuid
            );
            // here instead of returning a string for professional, I return the full object
            return {
              title: item.title,
              professional: professionalFull
            };
          });
          return {
            ...favorite,
            value
          };
        });
      })
    )
  }


}
