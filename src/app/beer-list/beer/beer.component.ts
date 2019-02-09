import { Component, OnInit, Input } from '@angular/core';
import { Beer } from './beer.model';
import { BeerService } from '../../shared/beer.service';
import { MatDialog } from '@angular/material';
import { BeerDetailsDialogComponent } from '../beer-details-dialog/beer-details-dialog.component';

@Component({
  selector: 'beer-bank-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Input() beer: Beer;
  @Input() isForSuggestion = false;
  constructor(
    private beerService: BeerService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  markFavouriteOrUnFavourite() {
    this.beerService.markFavouriteOrUnFavourite(this.beer.id, !this.beer.isFavourited);
    // this.beer.isFavourited = !this.beer.isFavourited;
  }

  openBeerDetailsDialog(): void {
    const dialogRef = this.dialog.open(BeerDetailsDialogComponent, {
      // width: '250px',
      // height: '800px',
      // panelClass: 'container',
      data: {beerDetails: this.beer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
