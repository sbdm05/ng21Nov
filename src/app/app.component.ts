import { Component } from '@angular/core';

// décorateur
// métadatas
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // toutes les propriétés et méthodes que je veux utiliser dans
  // ce composant
  title = 'crm';
}
