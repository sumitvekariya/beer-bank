import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BeerService } from '../beer.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('searchInput') input: ElementRef;

  constructor(private beerService: BeerService) { }

  ngAfterViewInit() {
    fromEvent<any>(this.input.nativeElement, 'keyup').
      pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(search => this.beerService.setSearch(search))
      ).subscribe();
  }

}
