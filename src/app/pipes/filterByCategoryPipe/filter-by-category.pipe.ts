import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(
    categories: { uuid: string }[],
    selectedCategory: { uuid: string },
    // cities: { uuid: string }[],
    // selectedCity: {uuid: string}[],
  ): any[] {
    // if(categories){
      return categories.filter((cat) => (cat.uuid === selectedCategory.uuid));
    // }
    //  else{
    //   console.log('else cities');
    //   return cities.filter((city) => city.uuid === selectedCity.uuid)
    // }
  }
}
