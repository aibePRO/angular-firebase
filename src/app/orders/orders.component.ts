import { Component, OnInit } from "@angular/core";
//TODO: import ngform...
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  
  orderForm;
  todook: boolean;

  constructor(
    private ordersService: OrdersService,
    private fb: FormBuilder
  ) {}


  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: '',//['', Validators.required],
      orderNumber: ''//['', Validators.required]
    })
  }

  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  coffeOrder = [];

  //TODO: add a new coffe...
  

  //TODO: remove a coffe...

  onSubmit() {
    const data = this.orderForm.value;

    // this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    // let data = this.ordersService.form.value;

    this.ordersService.createCoffeOrder(data)
      .then(data => {
        if (data) {
          this.todook = true;
        }
      });
  }
}
