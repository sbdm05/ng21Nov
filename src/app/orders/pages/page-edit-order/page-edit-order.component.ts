import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item!: Order; // undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    // extraire le paramètre id de la route
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(typeof id); // ??? string, number ?
    // chercher dans bdd l'objet qui correspond à l'id
    this.ordersService.getItemById(id).subscribe((data) => {
      console.log(data);
      // passer l'objet à app-form
      this.item = data;
    });
  }

  ngOnInit(): void {}

  public onEdit(item: Order) {
    // console.log(item);
    // étapes
    // appeler dans le service la méthode update.subscribe

    this.ordersService.update(item).subscribe((data) => {
      // redirection avec Router
      this.router.navigate(['orders']);
    });
  }
}
