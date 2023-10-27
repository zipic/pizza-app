import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBasketComponent } from './components/my-basket/my-basket.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'basket', component: MyBasketComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
