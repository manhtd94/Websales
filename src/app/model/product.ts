import { Category } from './category';
export class Product {
  id: number;
  name: string;
  detail: string;
  price: number;
  priceNew: number;
  image: string;
  category: Category;

  constructor() {
    this.id = 0;
    this.name = '';
    this.detail = '';
    this.price = 0;
    this.priceNew = 0;
    this.image = '';
    this.category = new Category();
  }
}
