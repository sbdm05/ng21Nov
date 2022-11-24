import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  @Input() headers!: string[];
  @Input() collection!: Order[];

  constructor() {
    // console.log(this.headers, 'constructor');
  }

  ngOnInit(): void {
    console.log(this.headers, 'ngOnInit');
    console.log(this.collection) // ??? vient de l'api
  }

  ngOnChanges(){
    console.log(this.collection) // ??? vient de l'api
  }



}
