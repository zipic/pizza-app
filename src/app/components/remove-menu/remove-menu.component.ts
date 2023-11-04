import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizzas } from 'src/app/models/pizzas.interface';
import { AppState } from 'src/app/redux/app.state';
import { hideDelete, removeFromBasket } from 'src/app/redux/basket.action';

@Component({
  selector: 'app-remove-menu',
  templateUrl: './remove-menu.component.html',
  styleUrls: ['./remove-menu.component.scss']
})
export class RemoveMenuComponent {
  @Input() pizza!:Pizzas

  constructor(private store: Store<AppState>) {}

  handlerDeleteItem(pizza: Pizzas) {
    this.store.dispatch(removeFromBasket({id: pizza.pizza.id}));
  }

  handerCansel(pizza: Pizzas) {
    this.store.dispatch(hideDelete({item : pizza}));
  }
}
