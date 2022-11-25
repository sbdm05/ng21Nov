import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  public collection$!: Observable<Order[]>; // false

  // @ViewChild('elseBlock')
  // public elseBlock!: HTMLParagraphElement | TemplateRef<any>;

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
  constructor(private ordersService: OrdersService, private router: Router) {
    // 2 on appelle la propriété collection
    // this.ordersService.collection.subscribe((data) => {
    //   // placer le contenu de data dans une propriété en public
    //   this.collection = data;
    //   // console.log(this.collection);
    // });
    this.collection$ = this.ordersService.collection;
    // Besoin d'un refreshCollection pour la situation où tu reviens sur la route
    // sans méthodes add/put/delete
    // dans ces cas-là, besoin de refaire un appel pour être sur d'avoir la dernière version de la bdd
    // sinon, on garde ce qui est enregistré dans le BehaviorSubject
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

  public goToEdit(id: number) {
    // console.log(id, 'icône cliquée')
    // rediriger avec Router (injection de dépendances dans constructor)
    // orders/edit/id
    this.router.navigate(['orders', 'edit', id]);
  }

  public onDelete(id: number) {
    console.log(id);
    // Etapes
    // appeler une méthode dans le service delete().subscribe()
    this.ordersService.delete(id).subscribe((data) => {
      console.log(data);
    });
  }
}
