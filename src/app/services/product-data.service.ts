import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private products = new Subject<IProduct[]>();
  products$ = this.products.asObservable();

  constructor( private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<IProduct[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
    .subscribe((data) => {
      this.products.next(data)
      console.log(data)
    })
  }
}
