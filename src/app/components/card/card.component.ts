import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.interface';
import { Pizzas } from 'src/app/models/pizzas.interface';
import { AppState } from 'src/app/redux/app.state';
import { selectBasketItems } from 'src/app/redux/basket.selector';
import { SidebarServiceService } from 'src/app/service/sidebar-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() filteredPizzas!: Pizza[];
  @Input() search!:string;
  @Output() addToBasketEvent = new EventEmitter<Pizza>();
  filterType: string = '';
  items$: Observable<Pizzas[]> = this.store.pipe(select(selectBasketItems));

  constructor(public sidebarService: SidebarServiceService, private store: Store<AppState>) {}

  ngOnInit(){
    this.sidebarService.filterType$.subscribe(type => {
      this.filterType = type;
    });
  }


  addToBasket(pizza: Pizza) {
    this.addToBasketEvent.emit(pizza);
  }

  isPizza(products: Pizza[]) {
   return products.filter(p => p.type === 'pizza');
  }

  isDrink(products: Pizza[]) {
    return products.filter(p => p.type === 'drink');
   }

   isAddedForPizza(pizza: Pizza): Observable<boolean> {
    const pizzaId = pizza.id;

    return this.items$.pipe(
      map(items => items.some(item => item.pizza.id === pizzaId))
    );
  }
}
