import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  private toggle = new Subject<boolean>();
  toggle$ = this.toggle.asObservable();  


  private numberOfItemsInCart = new Subject<number>();
  numberOfItemsInCart$ = this.numberOfItemsInCart.asObservable();

  constructor() { }

  setToggle(value: boolean){
    this.toggle.next(value);
  }

  setNumberOfItemsInCart(value: number) {
    this.numberOfItemsInCart.next(value);
  }
}
