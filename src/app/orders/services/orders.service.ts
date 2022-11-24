import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // propriété privée
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    // modifier le résultat de l'appel API
    // chaque objet devienne un Order, cad avec des méthodes
    // opérateur rxjs pipe
    this.collection = this.http
      .get<Order[]>('http://localhost:4006/orders')
      .pipe(
        // transformer le flux
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj); //
          });
        })
      );
  }
  // toutes les propriétés et méthodes
  // appel http

  // getter
  get collection(): Observable<Order[]> {
    // return propriété privée
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // méthode pour changer l'état
  public changeState(state: StateOrder, obj: Order): Observable<Order> {
    console.log(state, obj);
    // créer nouvel obj
    const item = new Order(obj);
    // modifier l'état avec nouvel état
    item.state = state;
    // return this.http.put('url/orders/id', obj)
    // backticks = altGr7
    return this.http.put<Order>(`http://localhost:4006/orders/${item.id}`, item);
  }
}
