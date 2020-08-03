import { IProduct } from "./product";

export interface ProductState {
    products: IProduct[];
    filter: string;
    filtereProducts: IProduct[];
    isLoading: boolean;
}