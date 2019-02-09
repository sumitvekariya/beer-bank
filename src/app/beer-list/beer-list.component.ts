import { Component, OnInit, ViewChild } from '@angular/core';
import { BeerService } from '../shared/beer.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, throttleTime, mergeMap, scan, tap } from 'rxjs/operators';
import { Beer } from './beer/beer.model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  selector: 'beer-bank-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
  // providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})
export class BeerListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  offset = new BehaviorSubject(null);
  beers$: Observable<Beer[]>;
  pageNumber = 1;
  theEnd = false;

  constructor(private beerService: BeerService) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    batchMap.pipe(map(v => Object.values(v))).subscribe();
    this.beers$ = this.beerService.beersList$;
   }

  ngOnInit() {

  }

  getBatch(offset) {
    return this.beerService.getBeersInfinite(offset ? offset : 1).pipe(
      tap(arr => (arr.length ? null : (this.theEnd = true))),
      map(arr => {
        return arr.reduce((acc, cur) => {
          const id = cur.id;
          const data = cur;
          return { ...acc, [id]: data };
        }, {});
      })
    );
  }

  nextBatch(e) {
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      this.pageNumber += 1;
      this.offset.next(this.pageNumber);
    }
  }

  trackByIdx(i) {
    return i;
  }

}
