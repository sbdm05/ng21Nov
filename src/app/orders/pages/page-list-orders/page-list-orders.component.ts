import { Component, OnInit } from '@angular/core';
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
  public collection!: Order[];

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
}
