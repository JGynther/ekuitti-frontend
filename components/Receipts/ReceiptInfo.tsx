import numberToDecimalString from "@utils/numberFormat";
import { ReceiptInfoProps } from "./types";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ReceiptInfo: React.FC<ReceiptInfoProps> = ({ receipt }) => {
  return (
    <div className="flex px-4 py-[10px] items-center justify-between border-2 border-white hover:border-grey hover:cursor-pointer">
      <div>
        <div className="text-receipt font-bold">{receipt.merchant.name}</div>
        <div className="text-dark">{new Date(receipt.receiptTimeStamp).toLocaleDateString("fi-FI")}</div>
      </div>
      <div className="flex">
        <div className="text-receipt font-bold mr-4">{numberToDecimalString(receipt.totalPriceIncVAT)}€</div>
        <div className="flex items-center bg-purple rounded p-[1px]">
          <ChevronRightIcon className="text-blue" />
        </div>
      </div>
    </div>
  );
};
  
  export default ReceiptInfo;