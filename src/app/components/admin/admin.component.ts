import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { PostOrderService } from 'src/app/services/post-order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  postedOrders: Order[] = []

  constructor(private postedOrderService: PostOrderService) { }

  ngOnInit(): void {
    this.postedOrderService.postedOrder$.subscribe((serviceData) => {
      this.postedOrders = serviceData;
    })

    this.postedOrderService.getOrder();
  }


  deleteOrder(id:number, i:number){
    
    this.postedOrderService.deleteOrder(id).subscribe((result) => {
      console.log(result);
    });
    this.postedOrders.splice(i, 1)
  }

}
