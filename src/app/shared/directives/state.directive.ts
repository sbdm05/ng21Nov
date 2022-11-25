import { Directive, HostBinding, Input } from '@angular/core';

// décorateur
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() etat!: string;
  // accéder à l'attribut class
  @HostBinding('class') tdClassName!: string;

  constructor() {
    // console.log(this.etat, 'app state déclenché'); // undefined
  }

  //
  ngOnInit() {
    // attention, déclenché une seule fois
    // console.log(this.etat, 'app state déclenché'); //
    // ne s'actualise pas
    // this.tdClassName = `state-${this.etat.toLowerCase()}`;

  }

  ngOnChanges() {
    // console.log(this.etat, 'app state déclenché'); // ??
    // s'actualise
    this.tdClassName = `state-${this.etat.toLowerCase()}`;
  }
}
