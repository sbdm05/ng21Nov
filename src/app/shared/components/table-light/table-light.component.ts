import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() headers!: string[];

  constructor() {
    console.log(this.headers, 'constructor');

   }

  ngOnInit(): void {
     console.log(this.headers, 'ngOnInit');
  }

}
