import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductState } from '../shared/contracts/products.state';
import { Banks } from '../shared/contracts/banks.enum';
import * as data from '../../assets/mock/data.json';

const initialState: ProductState = {
  isLoading: false,
  products: data.product,
  filtereProducts: [],
  filter: Banks.Bank1
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let store: MockStore;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
