import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BasketState } from './basket.reducer';

export const selectBasketState = createFeatureSelector<BasketState>('basket');

export const selectBasketItems = createSelector(
  selectBasketState,
  (state: BasketState) => state.items
);

export const selectBasketItemCount = createSelector(
  selectBasketItems,
  (items) => items.reduce((count, item) => count + item.count, 0)
);

export const selectBasketTotalPrice = createSelector(
  selectBasketItems,
  (items) => items.reduce((total, item) => total + (item.pizza.price * item.count), 0)
);
