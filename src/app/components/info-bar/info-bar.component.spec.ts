import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { InfoBarComponent } from './info-bar.component';
import * as data from '../../../assets/mock/data.json';
import { ProductState } from 'src/app/shared/contracts/products.state';
import { Banks } from 'src/app/shared/contracts/banks.enum';
import { provideMockStore } from '@ngrx/store/testing';

const initialState: ProductState = {
  isLoading: false,
  products: data.product,
  filtereProducts: [],
  filter: Banks.Bank1
};

describe('InfoBarComponent', () => {
  let component: InfoBarComponent;
  let fixture: ComponentFixture<InfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoBarComponent],
      imports: [
        TranslateModule.forRoot(),
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
