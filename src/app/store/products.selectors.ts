import { createSelector } from '@ngrx/store';
import { IAppState } from '../shared/contracts/app.state';
import { ProductState } from '../shared/contracts/products.state';

const productsSelector = (state: IAppState) => state.products;

export const isLoading = createSelector(
    productsSelector,
    (state: ProductState) => state.isLoading
);

export const productList = createSelector(
    productsSelector,
    (state: ProductState) => state.products
);

export const filterdProducts = createSelector(
    productsSelector,
    (state: ProductState) => state.filtereProducts
);
