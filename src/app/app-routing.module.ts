import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerBankHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: BeerBankHomeComponent
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
