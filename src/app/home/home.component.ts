import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/beer.service';

@Component({
  selector: 'beer-bank-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class BeerBankHomeComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    // this.beerService.fetchBeersList();
  }

}
