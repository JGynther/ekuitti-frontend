import numberToDecimalString from "@utils/numberFormat";
import { useOnClickOutside } from "@utils/hooks";
import { useRef } from "react";
import Link from "next/link";
import { ReceiptDetailsProps } from "./types";
import { useRouter } from "next/router";

const ReceiptDetails: React.FC<ReceiptDetailsProps> = ({
  receipt,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => onClose());

  const parseReceipt = (object: Object, indent: string) => {
    return Object.entries(object).map(([k, v]) => {
      if (typeof v === "string" || typeof v === "number") {
        return (
          <div key={k} className="text-sm">
            {indent}
            {k.toString()}: {v.toString()}
          </div>
        );
      }
      return (
        <div key={k} className="text-sm">
          {indent}
          {k.toString()}: {parseReceipt(v, `${indent}--`)}
        </div>
      );
    });
  };

  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="absolute bg-black/50 w-full h-full top-0 left-0 hover:cursor-default">
      <div
        ref={ref}
        className="rounded bg-white w-fit h-[calc(100%-125px)] max-h-[1000px] px-8 py-4 mx-auto mt-[75px] flex flex-col"
      >
        <div className="font-bold text-subtitle mx-auto w-fit">
          {receipt.merchant.name}
        </div>
        <div className="text-dark mx-auto pb-2">
          {new Date(receipt.receiptTimeStamp).toLocaleDateString("fi-FI")}
        </div>
        <div className="overflow-y-scroll h-[calc(100%-195px)] font-mono">
          {parseReceipt(receipt, "")}
        </div>
        <div className="rounded mt-4 bg-grey h-[2px]" />
        <div className="flex justify-between p-4 font-bold">
          <div>Yhteensä</div>
          <div>{numberToDecimalString(receipt.totalPriceIncVAT)}€</div>
        </div>
        <div className="rounded mb-3 bg-blue h-[3px]" />
        <div className="flex justify-between">
          {!path.startsWith("/receipts/shared/") && (
            <Link href={`/send-receipt/${receipt.id}`} passHref>
              <button className="bg-orange px-3 py-2 rounded font-bold">
                Lähetä kuitti
              </button>
            </Link>
          )}
          <button
            onClick={() => onClose()}
            className="bg-grey px-3 py-2 rounded font-bold ml-auto"
          >
            Sulje
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDetails;
