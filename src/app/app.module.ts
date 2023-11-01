import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaComponent } from './components/pizza/pizza.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BasketComponent } from './components/basket/basket.component';
import { MyBasketComponent } from './components/my-basket/my-basket.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from './redux/basket.reducer';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    PizzaComponent,
    SearchComponent,
    SidebarComponent,
    BasketComponent,
    MyBasketComponent,
    MainComponent,
    AboutComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ basket: basketReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
