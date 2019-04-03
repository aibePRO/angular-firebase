import { Injectable } from "@angular/core";
import { AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: "root"
})
export class OrdersService {

  constructor(private afs: AngularFirestore) {}

  //TODO: grupo de campos formulario controlados por código

  //Firestore CRUD actions
  createCoffeOrder(data): any {
    return new Promise((resolve, reject) => {
      this.afs.collection('coffeOrders')
      .add(data)
      .then(res => {}, err => {});
    });
  }

  updateCoffeOrder(data) {
    this.afs.collection('coffeOrders')
      .doc(data.payload.doc.id)
      .set({completed: true}, {merge: true})
  }

  getCoffeOrders() {
    return this.afs.collection('coffeOrders').snapshotChanges();
  }

  deleteCoffeOrder(data) {
    this.afs.collection('coffeOrders')
      .doc(data.payload.doc.id)
      .delete();
  }
}
