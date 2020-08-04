export interface IProduct {
    id: string,
    accountInformation?: IAccountInformation;
    locked: boolean,
    typeAccount: string,
}

export interface IAccountInformation {
    accountIdentifier: string;
    productType: string;
    bank: string;
}
