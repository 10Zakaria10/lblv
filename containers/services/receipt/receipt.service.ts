import apiClient from "~utils/apiClient";
import { GroupedReceiptLine, IReceipt, IReceiptLine } from "./types";

const getReceiptById = (id: string) => {
  return apiClient.get<IReceipt>(`/receipts/${id}`);
};

export const foramtReceiptDate = (date: Date):string=>{
  return new Date(date).toLocaleDateString('fr',{day:'2-digit' ,month:'short', year:'numeric', hour:'numeric', minute:"2-digit"})
}

export const groupeReceiptLinesByCategory = (recieptLines: IReceiptLine[]):GroupedReceiptLine[] =>{
  if (recieptLines.length === 0) return [];
  const groupedReceiptLines: GroupedReceiptLine[] = [];
  recieptLines.forEach(recieptLine => {
    const {category} = recieptLine;
    const index = groupedReceiptLines.findIndex(groupedRecieptLine => groupedRecieptLine.category === category);
    index === -1 
    ? groupedReceiptLines.push({category, items:[recieptLine]})
    : groupedReceiptLines[index].items.push(recieptLine);
  })
  return groupedReceiptLines;
}

export default {
    getReceiptById,
    foramtReceiptDate,
    groupeReceiptLinesByCategory
}