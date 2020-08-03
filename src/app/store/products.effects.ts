import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetProducts, GetProductsSuccess, EProductActions } from './products.actions';
import { IProduct } from '../shared/contracts/product';

@Injectable()
export class ProductsEffects {
    @Effect()
    getProducts$ = this.actions$.pipe(
        ofType<GetProducts>(EProductActions.getProducts),
        switchMap(() => this.productsService.getProducts()),
        switchMap((response: { product: IProduct[] }) =>
            of(new GetProductsSuccess(response.product))
        )
    );

    constructor(private productsService: ProductsService, private actions$: Actions) { }
}
