export interface IProduct {
    accountInformation: IAccountInformation;
}

export interface IAccountInformation {
    accountIdentifier: string;
    productType: string;
    bank: string;
}
