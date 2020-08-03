import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetProducts, GetProductsSuccess, FilterProductsByBank, EProductActions } from './products.actions';
import { IProduct } from '../shared/contracts/product';
import { Banks } from '../shared/contracts/banks.enum';

@Injectable()
export class ProductsEffects {
    @Effect()
    getProducts$ = this.actions$.pipe(
        ofType<GetProducts>(EProductActions.getProducts),
        switchMap(() => this.productsService.getProducts()),
        switchMap((response: { product: IProduct[] }) => [
            new GetProductsSuccess(response.product),
            new FilterProductsByBank({ products: response.product, filter: Banks.Bank1 })
        ])
    );

    constructor(private productsService: ProductsService, private actions$: Actions) { }
}
