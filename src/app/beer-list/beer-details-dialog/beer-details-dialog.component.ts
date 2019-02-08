import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Beer } from '../beer/beer.model';
import { Observable } from 'rxjs';
import { BeerService } from '../../shared/beer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'beer-bank-beer-details-dialog',
  templateUrl: './beer-details-dialog.component.html',
  styleUrls: ['./beer-details-dialog.component.scss']
})
export class BeerDetailsDialogComponent implements OnInit {

  beers$: Observable<Beer[]>;
  temp = new Array(3);

  constructor(
    public dialogRef: MatDialogRef<BeerDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public beer: Beer,
    private beerService: BeerService
  ) { }

  ngOnInit() {
    console.log(this.beer);
    this.beers$ = this.beerService.getBeersListValue().pipe(
      map((beers: Beer[]) => {
        return beers.slice(0, 3);
      })
    );
  }

}
