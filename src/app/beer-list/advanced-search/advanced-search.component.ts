import { Component, OnInit } from '@angular/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import { BeerService } from 'src/app/shared/beer.service';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment, Moment} from 'moment';
import { Observable } from 'rxjs';
import { Beer } from '../beer/beer.model';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'beer-bank-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AdvancedSearchComponent implements OnInit {
  modelName = '';

  maxIBU: number;
  minIBU: number;
  maxABV: number;
  minABV: number;
  maxEBC: number;
  minEBC: number;
  brewedBefore = new FormControl();
  brewedAfter = new FormControl();

  beers$: Observable<Beer[]>;


  chosenYearHandler(normalizedYear: _moment.Moment, formControl: FormControl) {
    const ctrlValue = formControl.value;
    ctrlValue.year(normalizedYear.year());
    formControl.setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: _moment.Moment, datepicker: MatDatepicker<_moment.Moment>, formControl: FormControl) {
    const ctrlValue = formControl.value;
    ctrlValue.month(normlizedMonth.month());
    formControl.setValue(ctrlValue);
    datepicker.close();
  }
  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  modelChanged(e) {
    console.log(e);
  }

  search() {
    let searchParams = '?page=1&per_page=40';
    if (this.maxIBU) {
      searchParams += '&ibu_lt=' + this.maxIBU;
    }

    if (this.minIBU) {
      searchParams += '&ibu_gt=' + this.minIBU;
    }

    if (this.maxABV) {
      searchParams += '&abv_lt=' + this.maxABV;
    }

    if (this.minABV) {
      searchParams += '&abv_gt=' + this.minABV;
    }

    if (this.maxEBC) {
      searchParams += '&ebc_lt=' + this.maxEBC;
    }

    if (this.minEBC) {
      searchParams += '&ebc_gt=' + this.minEBC;
    }

    if (this.brewedBefore.value) {
      searchParams += '&brewed_before=' + moment(this.brewedBefore.value).format('MM[-]YYYY');
    }

    if (this.brewedAfter.value) {
      searchParams += '&brewed_after=' + moment(this.brewedAfter.value).format('MM[-]YYYY');
    }
    console.log(this.maxIBU);
    console.log(this.minIBU);
    console.log(this.maxABV);
    console.log(this.minABV);
    console.log(this.maxEBC);
    console.log(this.minEBC);
    console.log(moment(this.brewedBefore.value).format('MM[-]YYYY'));
    console.log(moment(this.brewedAfter.value).format('MM[-]YYYY'));
    this.beers$ = this.beerService.advancedSearch(searchParams);
  }

  clear() {
    this.maxIBU = null;
    this.minIBU = null;
    this.maxABV = null;
    this.minABV = null;
    this.maxEBC = null;
    this.minEBC = null;
    this.brewedBefore.setValue(null);
    this.brewedAfter.setValue(null);
  }

}
