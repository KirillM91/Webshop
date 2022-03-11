import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class PostOrderService {
  private postedOrder = new Subject<Order[]>();
  postedOrder$ = this.postedOrder.asObservable();

  constructor(private http: HttpClient) { }

  sendOrder(data: Order) {
    return this.http.post("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", data)
  }

  getOrder() {
    this.http.get<Order[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyid=33")
    .subscribe((data) => {
      this.postedOrder.next(data);
      console.log(data)
    })
  }

  deleteOrder(id:number) {
    return this.http.delete("https://medieinstitutet-wie-products.azurewebsites.net/api/orders/"+id)
  }
}
