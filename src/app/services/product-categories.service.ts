import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategories } from '../models/ICategories';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {
  private categories = new Subject<ICategories[]>();
  categories$ = this.categories.asObservable();

  constructor( private httpClient: HttpClient) { }

  getCategories() {
    this.httpClient.get<ICategories[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/categories")
    .subscribe((data) => {
      this.categories.next(data)
      console.log(data)
    })
  }
}
