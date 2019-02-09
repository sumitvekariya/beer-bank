import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBankHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: BeerBankHomeComponent;
  let fixture: ComponentFixture<BeerBankHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerBankHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
