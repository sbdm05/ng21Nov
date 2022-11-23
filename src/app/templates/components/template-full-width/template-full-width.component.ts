import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit {
  @Input() title!: string;

  constructor() {
    console.log(this.title); // ???
  }

  // cycle de vie du composant
  ngOnInit() {
    console.log(this.title); // ???
  }

  // cycle de vie du composant
  ngOnChanges() {
    console.log(this.title, 'onchanges'); // ???
  }
  // cycle de vie du composant
  // ngDoCheck() {
  //   console.log(this.title, 'ondocheck'); // ???
  // }

  ngOnDestroy() {
    console.log('déclenché');
  }
}
