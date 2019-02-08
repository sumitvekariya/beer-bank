import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerBankHomeComponent } from './home/home.component';
import { FavouriteBeerListComponent } from './beer-list/favourite-beer-list/favourite-beer-list.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { AdvancedSearchComponent } from './beer-list/advanced-search/advanced-search.component';

const routes: Routes = [
  {
    path: 'home',
    component: BeerListComponent
  },
  {
    path: 'favourites',
    component: FavouriteBeerListComponent
  },
  {
    path: 'advanced-search',
    component: AdvancedSearchComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
