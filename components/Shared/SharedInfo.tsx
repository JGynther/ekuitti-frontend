//import { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const SharedInfo: React.FC<any> = ({ shared }) => {
  //const [showDetails, setShowDetails] = useState<Boolean>(false);

  const handleClick = () => {
    console.log("Näytä kaikki käyttäjän jakamat kuitit")
  }

  return (
    <div onClick={() => handleClick()} className="flex px-4 py-[10px] items-center justify-between border-2 border-white hover:border-grey hover:cursor-pointer">
      <div>
        <div className="text-receipt font-bold">{shared.name}</div>
        <div className="text-dark">eOsoite: {shared.eAddressId}</div>
        <div className="text-receipt font-bold mr-4">Kuitteja: {shared.sharedReceiptAmount} kpl</div>
      </div>
    </div>
  );
};
  
  export default SharedInfo;