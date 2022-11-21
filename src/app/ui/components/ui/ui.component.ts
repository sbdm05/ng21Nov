import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public open: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    // vérifier que cette méthode est bien déclenchée
    // changer la valeur d'une prop booléenne
    this.open = !this.open;
    console.log(this.open); // on vérifie!
  }
} // ne rien ajouter après cette accolade
