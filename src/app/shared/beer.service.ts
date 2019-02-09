import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicationUrls } from './application_urls';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Beer } from '../beer-list/beer/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beerSubject = new BehaviorSubject<Beer[]>([]);
  beersList$: Observable<Beer[]> = this.beerSubject.asObservable();

  private search = new BehaviorSubject<string>(null);
  searchValue: Observable<string> = this.search.asObservable();

  constructor(private http: HttpClient) { }

  getBeersListValue(): Observable<Beer[]> {
    return this.beersList$;
  }

  setSearch(searchText: string) {
    if (searchText) {
      return this.http.get(applicationUrls.searchBeersBasedOnName + searchText).pipe(
        tap((beers: Beer[]) => this.beerSubject.next(beers))
      );
    } else {
      this.getBeersInfinite(1);
      return of(null);
    }
  }

  markFavouriteOrUnFavourite(id: number, isFavorite) {
    const beersList: Beer[] = this.beerSubject.value;
    const key = 'isFavourited';
    const index = beersList.findIndex((b: Beer) => b.id === id);

    if (index > -1) {
      beersList[index][key] = isFavorite;
      this.beerSubject.next(beersList);
    }
  }

  getFavoriteBeers(): Observable<Beer[]> {
    return this.beersList$.pipe(
      map((beers: Beer[]) => {
        return beers.filter((b: Beer) => {
          return b.isFavourited;
        });
      }));
  }

  advancedSearch(params: string): Observable<Beer[]> {
    return this.http.get(applicationUrls.getAllBeers + params).pipe(
      map((beers: Beer[]) => beers)
    );
  }

  getBeersInfinite(pageNumber) {
    return this.http.get(applicationUrls.getAllBeers + '?page=' + pageNumber + '&per_page=40').pipe(
      map((beers: Beer[]) => {
        beers.forEach((b: Beer, index: number) => {
          beers[index].isFavourited = false;
        });
        const temp = this.beerSubject.value.slice().concat(beers);
        this.beerSubject.next(temp);
        return beers;
      }),
    );
  }
}
