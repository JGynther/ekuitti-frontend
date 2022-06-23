import { Receipt } from "@typings/hooks/useReceipts";

export type ReceiptInfoProps = {
  receipt: Receipt;
};

export type ReceiptDetailsProps = {
  receipt: Receipt;
  onClose: () => void;
};
