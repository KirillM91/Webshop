import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { IProduct } from 'src/app/models/IProduct';
import { BuyButtonComunicationService } from 'src/app/services/buy-button-comunication.service';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {
  products: IProduct[] = [];
  newProductInCart = new CartItem("",0,0);
  

  // lineColor(i) {
  //   return {
  //     borderTop: "8px solid hsl(" + (Math.random() * 360) + ", 100%, 50%)"
  //   }
  // }
  // lineColor = this.randomHsl()
  
  

  constructor(
    private service: ProductDataService, 
    private buyButtonService: BuyButtonComunicationService
  ) { }

  ngOnInit(): void {
    
    this.service.products$.subscribe((serviceData) => {
      this.products = serviceData;
    });

    this.service.getProducts(); 
  }


  addItemToBuy(name: string, price: number, id: number) {    
    this.newProductInCart = new CartItem(name, price, id)
    this.buyButtonService.addToLS(this.newProductInCart);
    console.log(this.newProductInCart);    
  }
}
