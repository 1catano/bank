
import { Action } from '@ngrx/store';
import { IProduct } from '../shared/contracts/product';

export enum EProductActions {
    getProducts = '[Products actions] Get product list from bank api',
    getProductsSuccess = '[Products actions] Get product list from bank api successfully',
    getProductsFailure = '[Products actions] Get product list from bank api failure',
    filterByBank = '[Products actions] Filter products by bank name',
}

export class GetProducts implements Action {
    public readonly type = EProductActions.getProducts;
    constructor() { }
}

export class GetProductsSuccess implements Action {
    public readonly type = EProductActions.getProductsSuccess;
    constructor(public payload: IProduct[]) { }
}

export class GetProductsFailure implements Action {
    public readonly type = EProductActions.getProductsFailure;
    constructor(public payload: string) { }
}

export class FilterProductsByBank implements Action {
    public readonly type = EProductActions.filterByBank;
    constructor(public payload: { products?: IProduct[], filter: string }) { }
}

export type ProductActions = GetProducts | GetProductsSuccess | GetProductsFailure | FilterProductsByBank;
