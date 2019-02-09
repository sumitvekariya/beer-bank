import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../../shared/beer.service';
import { Beer } from '../beer/beer.model';

@Component({
  selector: 'beer-bank-favourite-beer-list',
  templateUrl: './favourite-beer-list.component.html',
  styleUrls: ['./favourite-beer-list.component.scss']
})
export class FavouriteBeerListComponent implements OnInit {

  favouriteBeers$: Observable<Beer[]>;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.favouriteBeers$ = this.beerService.getFavoriteBeers();
  }

}
