import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.interface';
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

  constructor(public sidebarService: SidebarServiceService) {}

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
}
