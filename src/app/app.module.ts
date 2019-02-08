import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerBankHomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { BeerComponent } from './beer-list/beer/beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouriteBeerListComponent } from './beer-list/favourite-beer-list/favourite-beer-list.component';
import { BeerDetailsDialogComponent } from './beer-list/beer-details-dialog/beer-details-dialog.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AdvancedSearchComponent } from './beer-list/advanced-search/advanced-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerBankHomeComponent,
    HeaderComponent,
    BeerComponent,
    BeerListComponent,
    FavouriteBeerListComponent,
    BeerDetailsDialogComponent,
    AdvancedSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ScrollingModule
  ],
  providers: [],
  entryComponents: [BeerDetailsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
