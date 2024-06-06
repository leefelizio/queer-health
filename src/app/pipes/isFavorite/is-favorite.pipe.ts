import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavorite',
  standalone: true
})
export class IsFavoritePipe implements PipeTransform {

  transform(favorites: { favorite: {uuid: string} }[] | null, professional: { uuid: string }){
    if (!favorites) return false;
    return Boolean(favorites.find(fav => fav.favorite.uuid === professional.uuid));
  }

}

