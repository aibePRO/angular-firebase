import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
//TODO: import firestore

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  constructor() {}

  //TODO: grupo de campos formulario controlados por código

  //Firestore CRUD actions
  createCoffeeOrder(data) {
  }

  updateCoffeeOrder(data) {
  }

  getCoffeeOrders() {
  }

  deleteCoffeeOrder(data) {
  }
}
