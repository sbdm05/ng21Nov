import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // si l'utilisateur est sur /orders alors on affiche PageListOrders
  { path: '', component: PageListOrdersComponent },
  // si l'utilisateur est sur /orders/add alors on affiche PageAddOrder
  { path: 'add', component: PageAddOrderComponent },
  // si l'utilisateur est sur /orders/edit alors on affiche PageEditOrder
  { path: 'edit', component: PageEditOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
