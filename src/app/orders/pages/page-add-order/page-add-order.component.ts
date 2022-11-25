import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(obj: Order) {
    console.log(obj, 'depuis parent');
    // étapes prochaines ?
    // utiliser une fonction dans service
    // attention besoin de subscribe!
    this.ordersService.add(obj).subscribe((data)=> {
      console.log(data);
      // redirection vers orders à l'intérieur de subscribe
      this.router.navigate(['orders'])
    });
  }
}
