import { IProduct } from "./product";

export interface ProductState {
    products: IProduct[];
    filtereProducts: IProduct[];
    isLoading: boolean;
}