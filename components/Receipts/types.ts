import { Receipt } from "@typings/useReceipts";

export type ReceiptInfoProps = {
  receipt: Receipt;
};

export type ReceiptDetailsProps = {
  receipt: Receipt;
  onClose: () => void;
};
