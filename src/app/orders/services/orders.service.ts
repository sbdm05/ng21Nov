import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // propriété privée
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:4006/orders');
  }
  // toutes les propriétés et méthodes
  // appel http

  // getter
  get collection(): Observable<Order[]> {
    // return propriété privée
    return this.collection$;
  }

  // setter
  set collection(col : Observable<Order[]> ) {
    this.collection$ = col;
  }
}
