import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartCheckoutCommunicationService {

  private cartItem = new Subject<CartItem[]>();
  cartItem$ = this.cartItem.asObservable();

  constructor() { }

  displayInCheckout(value: CartItem[]) {
    this.cartItem.next(value);
  }
}
