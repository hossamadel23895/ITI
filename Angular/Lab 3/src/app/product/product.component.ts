import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: Product[] = [
    new Product(
      './assets/imgs/Burger.jpg',
      'Chicken Burger',
      'burger-23',
      new Date('2022-01-01'),
      5,
      4.2
    ),
    new Product(
      './assets/imgs/Grills.jpg',
      'Mixed Grills',
      'grills-13',
      new Date('2022-02-15'),
      12,
      4.8
    ),
    new Product(
      './assets/imgs/Pizza.jpg',
      'Ranch Pizza',
      'pizza-9',
      new Date('2022-03-09'),
      8,
      3.7
    ),
  ];

  showImage: boolean = false;
  filterInputValue = '';

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
