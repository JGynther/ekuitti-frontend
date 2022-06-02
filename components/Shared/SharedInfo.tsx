//import { useState } from "react";

const SharedInfo: React.FC<any> = ({ shared }) => {
  //const [showDetails, setShowDetails] = useState<Boolean>(false);

  const handleClick = () => {
    console.log("Näytä kaikki käyttäjän jakamat kuitit")
  }

  return (
    <div onClick={() => handleClick()} className="flex px-4 py-[10px] items-center justify-between border-2 border-white hover:border-grey hover:cursor-pointer">
      <div>
        <div className="text-receipt font-bold">Nimi: {shared.name}</div>
        <div className="text-receipt font-bold">eOsoite: {shared.eAddressId}</div>
        <div className="text-receipt font-bold">Kuitteja: {shared.sharedReceiptAmount} kpl</div>
      </div>
    </div>
  );
};
  
  export default SharedInfo;