import { ProductState } from '../shared/contracts/products.state';
import { ProductActions, EProductActions } from './products.actions';
import { IProduct } from '../shared/contracts/product';

export const initialState: ProductState = {
    isLoading: false,
    products: [],
    filtereProducts: []
};

const FILTER_PRODUCTS_CRITERIA = 'BANCO_1';

export function productsReducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case EProductActions.getProducts: {
            const newState: ProductState = {
                ...state,
                isLoading: true
            };
            return newState;
        }
        case EProductActions.getProductsSuccess: {
            const newState: ProductState = {
                ...state,
                isLoading: false,
                products: [...action.payload],
                filtereProducts: action.payload.filter((product: IProduct) => (
                    product?.accountInformation?.bank === FILTER_PRODUCTS_CRITERIA
                ))
            };
            return newState;
        }
    }
}
