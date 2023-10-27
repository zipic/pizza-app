import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizzas } from 'src/app/models/pizzas.interface';
import { AppState } from 'src/app/redux/app.state';
import { minusItem, plusItem, removeFromBasket } from 'src/app/redux/basket.action';
import { selectBasketItemCount, selectBasketItems, selectBasketTotalPrice } from 'src/app/redux/basket.selector';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.scss']
})
export class MyBasketComponent {
  items$: Observable<Pizzas[]> = this.store.pipe(select(selectBasketItems));
  total$: Observable<number> = this.store.pipe(select(selectBasketTotalPrice));
  count$: Observable<number> = this.store.pipe(select(selectBasketItemCount))

  constructor(private store: Store<AppState>) {}

  handlerDeleteFromBasket(pizza: Pizzas) {
    this.store.dispatch(removeFromBasket({id: pizza.pizza.id}))
  }

  handlerPlusElement(pizza : Pizzas) {
    this.store.dispatch(plusItem({item: pizza}))
  }

  handlerMinusElement(pizza: Pizzas) {
    this.store.dispatch(minusItem({item: pizza}));
  }
}
