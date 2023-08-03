import { IStore } from "~components/balanceHistoryTable/service/types";

export interface IReceiptLine{
    label: string;
    unitPriceTTC: number;
    quantity: number;
    category: string;
}

export interface IReceipt {
    store: IStore;
    createdAt: Date;
    remoteId: string;
    totalAmountTTC: number;
    newBalance: number;
    oldBalance: number;
    totalDiscount: number;
    receiptLines: IReceiptLine[]
    paymentTypes: string[]
}

export interface GroupedReceiptLine {
    category: string;
    items: IReceiptLine[]
}