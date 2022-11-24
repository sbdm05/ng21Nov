import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

// décorateur
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // propriété pour stocker data
  public collection!: Order[]; // false

  // 1 - stocker enum dans propriétés states
  // Object.values transforme un objet en tableau, donc on peut utiliser *ngFor
  // Object.values = JS
  public states = Object.values(StateOrder);
  // 2 - itérer dans states

  // liste des headers
  public headers = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  // 1 - injecte le service
  // injection de dépendances
  constructor(private ordersService: OrdersService) {
    // 2 on appelle la propriété collection
    this.ordersService.collection.subscribe((data) => {
      // placer le contenu de data dans une propriété en public
      this.collection = data;
      console.log(this.collection);
    });
  }

  ngOnInit(): void {}

  // change detection
  // calcul du montant HT et TTC
  // public total(val: number, coef: number, tva?: number ): number{
  //   console.log('déclenché'); // ???
  //   if(tva){
  //      return val * coef * (1+tva/100)
  //    }
  //    return val * coef;
  // }

  public changeState(obj: Order, event: Event) {
    // console.log(event);
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    // console.log(state);
    // nouvel état + objet
    // appel vers le service - méthode put
    this.ordersService.changeState(state, obj).subscribe((data) => {
      // console.log(data);
      // mettre à jour notre objet côté front
       Object.assign(obj, data);
      // obj = data;
    });
  }
}
