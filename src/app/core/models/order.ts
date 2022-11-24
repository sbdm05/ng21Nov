import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTTC(): number {
    console.log('totalTTC déclenché')
    return this.tjmHt * this.nbJours * ( 1 + this.tva/100);
  }
  // ajouter méthodes
  constructor(obj?: Partial<Order>) {
    if (obj) {
      // On fusionne avec méthode JS
      Object.assign(this, obj);
    }
  }
}
// new Order({})
// new Order()
// new Order ({complet})
