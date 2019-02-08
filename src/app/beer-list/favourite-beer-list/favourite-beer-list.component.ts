import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map} from 'rxjs/operators';
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

    this.beerService.searchValue.subscribe( (searchText: string) => {
      if (searchText) {
        this.favouriteBeers$ =  this.beerService.getBeersListValue().pipe(
          distinctUntilChanged(),
          map( (beers: any) =>  {
            console.log(beers);
            return beers.filter( b => b.name.toLowerCase().includes(searchText.toLowerCase()));
          })
        );
      } else {
        this.favouriteBeers$ = this.beerService.getFavoriteBeers();
      }
    });
  }

}
