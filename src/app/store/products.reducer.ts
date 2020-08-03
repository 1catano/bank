import { ProductState } from '../shared/contracts/products.state';
import { ProductActions, EProductActions } from './products.actions';
import { IProduct } from '../shared/contracts/product';
import { Banks } from '../shared/contracts/banks.enum';
import { productList } from './products.selectors';

export const initialState: ProductState = {
    isLoading: false,
    products: [],
    filtereProducts: [],
    filter: Banks.Bank1
};

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
                products: [...action.payload]
            };
            return newState;
        }
        case EProductActions.filterByBank: {
            const products = action.payload.products ? [...action.payload.products] : [...state.products];
            const newState: ProductState = {
                ...state,
                filter: action.payload.filter,
                filtereProducts: action.payload.filter === Banks.ALL
                    ? products
                    : products.filter((product: IProduct) => product?.accountInformation?.bank === action.payload.filter)
            };
            return newState;
        }
        default: {
            return state;
        }
    }
}
