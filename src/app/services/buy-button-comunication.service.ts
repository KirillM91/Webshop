import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class BuyButtonComunicationService {

  private addProductToLS = new Subject<CartItem>();
  addProductToLS$ = this.addProductToLS.asObservable();

  constructor() { }

  addToLS(value: CartItem) {
    this.addProductToLS.next(value);
  }
}
