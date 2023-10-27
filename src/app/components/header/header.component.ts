import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux/app.state';
import { selectBasketItemCount } from 'src/app/redux/basket.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  count$: Observable<number> = this.store.pipe(select(selectBasketItemCount));

  constructor(private router: Router, private store: Store<AppState>) {

  }

  async goToBasket() {
    await this.router.navigate(['/basket'])
  }
}
