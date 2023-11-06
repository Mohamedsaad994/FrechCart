import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../interFaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:product[], term:string): product[]  {
    return products.filter( (item)=> item.category.name.toLowerCase().includes(term.toLowerCase()) )
  }

}
