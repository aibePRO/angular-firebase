import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getCoffeeOrders();
  }

  coffeeOrders;

  getCoffeeOrders = () =>
    //TODO

  //TODO: delete order
  
  //TODO: mark as completed
  
}
