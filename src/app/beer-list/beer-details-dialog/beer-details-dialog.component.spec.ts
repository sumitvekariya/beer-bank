import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsDialogComponent } from './beer-details-dialog.component';

describe('BeerDetailsDialogComponent', () => {
  let component: BeerDetailsDialogComponent;
  let fixture: ComponentFixture<BeerDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
