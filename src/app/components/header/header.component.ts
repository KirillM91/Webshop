import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { ICategories } from 'src/app/models/ICategories';
import { ComunicationService } from 'src/app/services/comunication.service';
import { ProductCategoriesService } from 'src/app/services/product-categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: ICategories[] = [];
  numberOfItemsInCart: number = 0;
  cartItem: CartItem[] = [];

  constructor(
    private service: ProductCategoriesService, 
    private comunicationService: ComunicationService
    ) { }

  ngOnInit(): void {
    this.service.categories$.subscribe((serviceData) => {
      this.categories = serviceData;
    });

    this.service.getCategories();

    //Fixa med LS sen
    this.comunicationService.numberOfItemsInCart$.subscribe((data) => {
      this.numberOfItemsInCart = data;
    })
  }

  cartVisible: boolean = false;

  toggleCart() {
    this.cartVisible = !this.cartVisible;
    this.comunicationService.setToggle(this.cartVisible);    
  }


}
