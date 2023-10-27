import { createAction, props } from '@ngrx/store';
import { Pizzas } from '../models/pizzas.interface';

export const addToBasket = createAction('[Basket] Add To Basket', props<{ item: Pizzas }>());
export const removeFromBasket = createAction('[Basket] Remove From Basket', props<{ id: number }>());
export const clearBasket = createAction('[Basket] Clear Basket');
export const updateBasketItems = createAction('[Basket] Apdate Basket', props<{item: Pizzas}>());
export const plusItem = createAction('[Basket] Plus Item', props<{item: Pizzas}>());
export const minusItem = createAction('[Basket] Minus Item', props<{item: Pizzas}>());
export const add = createAction('Add', (item: Pizzas) => ({
  item,
  saveToLocalStorage: true
}));
