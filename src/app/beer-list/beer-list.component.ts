import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/beer.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, flatMap, map } from 'rxjs/operators';
import { Beer } from './beer/beer.model';

@Component({
  selector: 'beer-bank-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers$: Observable<Beer[]>;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beers$ = this.beerService.getBeersListValue();

    // this.beerService.searchValue.subscribe( (searchText: string) => {
    //   if (searchText) {
    //     this.beers$ =  this.beerService.getBeersListValue().pipe(
    //       distinctUntilChanged(),
    //       map( (beers: any) =>  {
    //         console.log(beers);
    //         return beers.filter( b => b.name.toLowerCase().includes(searchText.toLowerCase()));
    //       }),
    //       // flatMap(beer => beer),
    //       // filter( (beer: any) => {
    //       //   console.log(beer.name.toLowerCase().includes(searchText.toLowerCase()));
    //       //   return beer.name.toLowerCase().includes(searchText.toLowerCase());
    //       // })
    //     );
    //   } else {
    //     this.beers$ = this.beerService.getBeersListValue();
    //   }
    // });
  }

}
