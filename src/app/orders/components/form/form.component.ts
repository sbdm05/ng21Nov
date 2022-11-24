import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // importer le new Order du parent
  @Input() init!: Order;
  // créer une propriété disponible à l'output
  // attention de ne pas importer depuis Stream
  @Output() submitted = new EventEmitter<Order>()

  // prop pour le form
  public form!: FormGroup;

  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
      console.log(this.form.value, 'validé');
      // déclenché submitted
      // très proche des observables
      this.submitted.emit(this.form.value);
  }
}
