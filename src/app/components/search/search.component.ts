import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.interface';
import { SidebarServiceService } from 'src/app/service/sidebar-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() pizzas!: Pizza[]
  @Output() findPizza = new EventEmitter<string>();
  search: string = '';
  filterType: string = ''

  constructor(public sidebarService: SidebarServiceService) {}

  ngOnInit(){
    this.sidebarService.filterType$.subscribe(type => {
      this.filterType = type;
    });
  }

  filterPizza(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
      this.findPizza.emit(this.search);
  }
}
