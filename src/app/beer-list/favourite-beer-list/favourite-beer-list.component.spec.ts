import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBeerListComponent } from './favourite-beer-list.component';

describe('FavouriteBeerListComponent', () => {
  let component: FavouriteBeerListComponent;
  let fixture: ComponentFixture<FavouriteBeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBeerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
