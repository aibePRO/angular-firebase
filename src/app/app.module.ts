import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//TODO: import formularios reactivos


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrdersService } from "./shared/orders.service";

//environment import
//TODO

//angularfire imports
//TODO

@NgModule({
  declarations: [AppComponent, OrdersComponent, OrderListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
