import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Link from "next/link";

const SharedInfo: React.FC<any> = ({ shared }) => {

  return (
    <div className="flex px-4 py-[10px] items-center justify-between border-2 border-white hover:border-grey hover:cursor-pointer">
      <div>
        <div className="text-receipt font-bold">{shared.name}</div>
        <div className="text-dark">eOsoite: {shared.eAddressId}</div>
        <div className="text-receipt font-bold mr-4">Kuitteja: {shared.sharedReceiptAmount} kpl</div>
      </div>
      <Link href={`/receipts/shared/${shared.eAddressId}`} passHref>
        <div className="flex items-center bg-purple rounded p-[1px]">
          <ChevronRightIcon className="text-blue" />
        </div>
      </Link>
    </div>
  );
};
  
  export default SharedInfo;