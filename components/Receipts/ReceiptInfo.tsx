import { ReceiptInfoProps } from "./types";

const ReceiptInfo: React.FC<ReceiptInfoProps> = ({ receipt }) => {
    return (
      <div>{receipt.merchant.name}</div>
    );
  };
  
  export default ReceiptInfo;