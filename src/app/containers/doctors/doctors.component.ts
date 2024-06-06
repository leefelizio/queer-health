import { Component } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import {
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
} from "@ionic/angular/standalone";
import { RouterLink } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { FilterByCategoryPipe } from "../../pipes/filterByCategoryPipe/filter-by-category.pipe";
import { FirestoreService } from "../../services/firestore.service";
import { firstValueFrom } from "rxjs";
import { IsFavoritePipe } from "../../pipes/isFavorite/is-favorite.pipe";
import { IsAuthService } from "../../services/auth.service";

@Component({
  selector: "app-doctors",
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
    IsFavoritePipe,
    AsyncPipe
  ],
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"],
})
export class DoctorsComponent {
  title!: string;
  categories!: any[];
  allCategories!: any[];
  selectedCategorie!: any;
  cities!: any[];
  selectedCity!: any;
  filters: any = { city: undefined, speciality: undefined };
  favs$ = this.firestoreService.loadData();

  constructor(
    apiService: ApiService,
    public firestoreService: FirestoreService,
    public _isAuth:IsAuthService
  ) {
    // get data
    apiService.getData().then((database) => {
      console.log("database", database);

      this.title = database.title;
      this.categories = database.data;
      this.allCategories = database.data;
      this.selectedCategorie = database.data[0];
      console.log("cat", this.categories);

      this.cities = database.data
        .flatMap((obj) => obj.professionals)
        .map((p) => p.city);
      // this.selectedCity = database.data[0].professionals[0].city;
      console.log("All cities", this.cities);
    });
  }

  async toggleFavorite(professional: any) {
    const { uuid, title } = professional;
    const favs = await firstValueFrom(this.firestoreService.loadData());
    const { id } = favs.find(({ favorite }) => favorite.uuid === uuid) || {};
    if (id) {
      this.firestoreService.removeData(id);
    } else {
      this.firestoreService.addData({ uuid, title });
    }
  }

  filterByCity($event: any) {
    console.log($event.detail.value);
    const filters = $event.detail.value;
    this.filters.city = filters;
    this.runFilters();
  }

  filterBySpecialty($event: any) {
    console.log($event.detail.value);
    const filters = $event.detail.value;
    this.filters.speciality = filters;
    this.runFilters();
  }

  runFilters() {
    const byCat = this.allCategories.filter((cat) =>
      Boolean(this.filters.speciality.find((uuid: string) => uuid === cat.uuid))
    );

    console.log(byCat);
    const filtred = this.filters.city
      ? byCat
          .map((cat) => {
            const exist = cat.professionals.find((pro: any) =>
              this.filters.city?.find((city: any) => city.id === pro.city.id)
            );
            return exist
              ? {
                  ...cat,
                  professionals: cat.professionals.filter((pro: any) =>
                    this.filters.city?.find(
                      (city: any) => city.id === pro.city.id
                    )
                  ),
                }
              : undefined;
          })
          .filter(Boolean)
      : byCat;
    this.categories = filtred;
  }
}

// filter returns an array with everything that corresponds
// find returns the first element of the array
// map returns a new array from an array - only for []