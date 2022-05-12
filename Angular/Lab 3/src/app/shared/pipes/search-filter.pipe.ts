import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchFilterPipe implements PipeTransform {
  transform(products: Product[], s: string): Product[] {
    return products.filter((product) =>
      product.name.toLowerCase().includes(s.toLowerCase())
    );
  }
}
