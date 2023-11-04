import { createReducer, on } from '@ngrx/store';
import * as BasketActions from '../redux/basket.action';
import { Pizzas } from '../models/pizzas.interface';

export interface BasketState {
  items: Pizzas[];
}

const initialState: BasketState = {
  items: []
};

export const basketReducer = createReducer(
  initialState,
  on(BasketActions.addToBasket, (state, action) => {
    const existingItem = state.items.find(item => item.pizza.id === action.item.pizza.id);

    if (existingItem) {
      const updatedItems = state.items.map(item =>
        item.pizza.id === action.item.pizza.id ?
        { ...item, count: 1, total: item.pizza.price } : item
      );

      return {
        ...state,
        items: updatedItems
      };
    } else {
      return {
        ...state,
        items: [...state.items, action.item]
      };
    }

  }),
  on(BasketActions.removeFromBasket, (state, action) => ({
    ...state,
    items: state.items.filter(item => item.pizza.id !== action.id)
  })),
  on(BasketActions.plusItem, (state, action) => {
    const updatedItems = state.items.map(item =>
      item.pizza.id === action.item.pizza.id ?
      { ...item, count: item.count + 1, total: item.pizza.price * (item.count + 1) } : item
    );

    return {
      ...state,
      items: updatedItems
    };
  }),
  on(BasketActions.minusItem, (state, action) => {
    const updatedItems = state.items.map(item =>
      item.pizza.id === action.item.pizza.id && item.count > 0 ?
      { ...item, count: item.count - 1, total: item.pizza.price * (item.count - 1)} : item
    );

    return {
      ...state,
      items: updatedItems
    };
  }),

  on(BasketActions.showDelete, (state, action) => {
    return {
      ...state,
      items: state.items.map(item => {
        if (item.pizza.id === action.item.pizza.id && item.count === 0) {
          return {
            ...item,
            isRemoved: true,
            count: item.count + 1,
          };
        }
        return item;
      })
    };
  }),

  on(BasketActions.hideDelete, (state, action) => {
    return {
      ...state,
      items: state.items.map(item => {
        if (item.pizza.id === action.item.pizza.id || item.count > 1) {
          return {
            ...item,
            isRemoved: false,
          };
        }
        return item;
      })
    };
  })
);
