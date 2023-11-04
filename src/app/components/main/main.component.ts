import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, find } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.interface';
import { Pizzas } from 'src/app/models/pizzas.interface';
import { AppState } from 'src/app/redux/app.state';
import { addToBasket } from 'src/app/redux/basket.action';
import { selectBasketItems } from 'src/app/redux/basket.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pizzas: Pizza[] = []
  filteredPizzas: Pizza[] = []
  search: string = ''
  total: number = 0
  showContainer: boolean = true;
  items$: Observable<Pizzas[]> = this.store.pipe(select(selectBasketItems));

  constructor(private http: HttpClient,
    private store: Store<AppState>) {}

  ngOnInit() {
    this.http.get('assets/products.json').subscribe((data) => {
      this.pizzas = Object.values(data);
      this.filteredPizzas = this.pizzas;
    });
  }


  onFindPizza(searchItem: string) {
    this.search = searchItem;
     this.filteredPizzas = this.pizzas
      .filter(p => p.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  onAddToBasket(pizza: Pizza) {
      const newItem: Pizzas = { pizza, count: 1, total: pizza.price, isRemoved: false };
      this.store.dispatch(addToBasket({item: newItem}));
  }
}
