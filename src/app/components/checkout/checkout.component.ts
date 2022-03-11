import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Order } from 'src/app/models/Order';
import { OrderRow } from 'src/app/models/OrderRow';
import { PostOrderService } from 'src/app/services/post-order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItem: CartItem[] = [];
  orderRows: OrderRow[] = [];
  orderRow: OrderRow = new OrderRow(0, 1)
  date: Date = new Date
  totalPrice: number = 0;
  companyId: number = 33;
  newOrder: Order = new Order(0, this.companyId, this.date, "", "", this.totalPrice, [])

  constructor(private orderData: PostOrderService) { }

  ngOnInit(): void {

    //Uppdaterar cartItem med LS värden när sidan laddas
    let newCartItemString: string = localStorage.getItem("newProductInCart") || "[]";
    this.cartItem = JSON.parse(newCartItemString);


    // console.log("cartItem: ", this.cartItem)

    for (let i:number = 0; i<this.cartItem.length; i++){ 
      this.orderRow = new OrderRow(this.cartItem[i].id, 1);
      this.orderRows.push(this.orderRow) 
    }

    // console.log("orderRows: ", this.orderRows)



    //Uppdaterar totalPrice med LS värden när sidan laddas
    let totalPriceString: string = localStorage.getItem("totalPrice") || "";
    this.totalPrice = JSON.parse(totalPriceString);
  }

  //Tar bort en artikel från LS och uppdaterar total priset 
  //===UPDATERA TILL DRY====
  removeCartItem(index: number) {
    //Artikel
    let newCartItemString: string = localStorage.getItem("newProductInCart") || "[]";
    this.cartItem = JSON.parse(newCartItemString);
    this.cartItem.splice(index, 1);
    localStorage.setItem("newProductInCart", JSON.stringify(this.cartItem));

    //Uppdaterar totala priset
    this.totalPrice = this.cartItem.reduce((a, b) => a + b.price, 0);
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));
  }

  getUserData(userData: any){
    this.newOrder = new Order(0, this.companyId, this.date, userData.createdBy, userData.paymentMethod, this.totalPrice, this.orderRows)
    this.orderData.sendOrder(this.newOrder).subscribe((result) => {
      console.log("push result: ", result)
    })
    console.log(this.newOrder)
  }
}
