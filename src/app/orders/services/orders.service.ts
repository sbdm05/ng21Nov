import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // propriété privée
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // modifier le résultat de l'appel API
    // chaque objet devienne un Order, cad avec des méthodes
    // opérateur rxjs pipe
    // this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
    //   // transformer le flux
    //   map((tab) => {
    //     return tab.map((obj) => {
    //       return new Order(obj); //
    //     });
    //   })
    // );
    this.refreshCollection();
  }

  // créer refreshCollection()
  public refreshCollection() {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        // transformer le flux
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj); //
          });
        })
      )
      .subscribe((data) => {
        // alimenter un observable chaud
        this.collection$.next(data);
      });
  }

  // getter
  get collection(): Observable<Order[]> {
    // return propriété privée
    this.refreshCollection();
    return this.collection$;
  }

  // setter plus utilisé car refreshCollection
  // set collection(col: Observable<Order[]>) {
  //   this.collection$ = col;
  // }

  // méthode pour changer l'état
  public changeState(state: StateOrder, obj: Order): Observable<Order> {
    console.log(state, obj);
    // créer nouvel obj
    const item = new Order(obj);
    // modifier l'état avec nouvel état
    item.state = state;
    console.log(item)
    // return this.http.put('url/orders/id', obj)
    // backticks = altGr7
    return this.update(item);
  }

  public update(item: Order): Observable<Order> {
    console.log(item, 'depuis service')
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap(()=>{
        this.refreshCollection()
      })
    );
  }

  public add(obj: Order): Observable<Order> {
    // this.http.post('url/orders', item);
    return this.http.post<Order>(`${this.urlApi}/orders`, obj);
  }

  // méthode pour retrouver un objet à partir de son id
  public getItemById(id: number): Observable<Order> {
    // this.http.get('url/orders/id')
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // méthode delete
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      // déclenché refreshCollection
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
