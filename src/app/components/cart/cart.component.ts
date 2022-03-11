import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { BuyButtonComunicationService } from 'src/app/services/buy-button-comunication.service';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartVisible: boolean = false;
  cartItem: CartItem[] = [];
  newCartItem = new CartItem("", 0, 0);
  totalPrice: number = 0;
  

  constructor(
    private comunicationService: ComunicationService,
    private buyButtonService: BuyButtonComunicationService
    ) { }

  cartBodyVisible: string = "cart-body-visible";
  cartBodyHidden: string = "cart-body-hidden";

  ngOnInit(): void {
    //Togglar cart
    this.comunicationService.toggle$.subscribe(value => {
      this.cartVisible = value
      console.log(this.cartVisible)
    });

    //Sätter nytt värde på newCartItem
    this.buyButtonService.addProductToLS$.subscribe(value => {
      this.newCartItem = value;
      this.createCartItem(value);
      console.log("newCartProduct",this.newCartItem);
    });

    //Uppdaterar cartItem med LS värden när sidan laddas
    let newCartItemString: string = localStorage.getItem("newProductInCart") || "[]";
    this.cartItem = JSON.parse(newCartItemString);
    console.log("cart", this.cartItem);

    //Uppdaterar totalPrice med LS värden när sidan laddas
    let totalPriceString: string = localStorage.getItem("totalPrice") || "";
    this.totalPrice = JSON.parse(totalPriceString);

    
  }


  //Lägger till ny artikel i LS och uppdaterar total priset
  createCartItem(newCartItem: CartItem){
    //Artikel
    this.cartItem.push(newCartItem)
    localStorage.setItem("newProductInCart", JSON.stringify(this.cartItem));

    //Uppdaterar totala priset
    this.totalPrice += newCartItem.price;
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));

    //Antal varor i korgen
    this.comunicationService.setNumberOfItemsInCart(JSON.parse(localStorage.getItem("newProductInCart") || "[]").length);
    // JSON.parse(localStorage.getItem("newProductInCart") || "[]").length
  }

  //Tar bort en artikel från LS och uppdaterar total priset
  removeCartItem(index: number) {
    //Artikel
    let newCartItemString: string = localStorage.getItem("newProductInCart") || "[]";
    this.cartItem = JSON.parse(newCartItemString);
    this.cartItem.splice(index, 1);
    localStorage.setItem("newProductInCart", JSON.stringify(this.cartItem));

    //Uppdaterar totala priset
    this.totalPrice = this.cartItem.reduce((a, b) => a + b.price, 0);
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));

    //Antal varor i korgen
    this.comunicationService.setNumberOfItemsInCart(JSON.parse(localStorage.getItem("newProductInCart") || "[]").length);
    // this.comunicationService.setNumberOfItemsInCart(this.cartItem.length);
  }
}
