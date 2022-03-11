export class CartItem {
  name: string;
  price: number;
  id: number;  

  constructor(newCartItem: string, price: number, id: number) {
    this.name = newCartItem;
    this.price = price;
    this.id = id;
  }
}