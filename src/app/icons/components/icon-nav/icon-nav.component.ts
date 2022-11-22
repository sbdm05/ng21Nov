import { Component, OnInit } from '@angular/core';
// 1 - importer la variable fontAwesome
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss']
})
export class IconNavComponent implements OnInit {

  // 2 - créer une propriété pour stocker la variable
  public myIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
