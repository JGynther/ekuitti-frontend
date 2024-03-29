import type { Receipts } from "@typings/hooks/useReceipts";
import Link from "next/link";
import fuzzy from "@utils/fuzzy";

const Result = ({
  string,
  query,
  id,
  data,
}: {
  string: string;
  query: string;
  id: string;
  data: Receipts | undefined;
}) => {
  const receipt = data?.find((receipt) => receipt.id === id);

  if (!receipt) return null;

  const matching = fuzzy.highlight(string, query);

  return (
    <Link href={`/send-receipt/${id}`} passHref>
      <div className="bg-dark bg-opacity-10 hover:bg-opacity-100 hover:text-white transition py-2 px-4 space-y-1 cursor-pointer">
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: matching }} // A bit dangerous
        ></div>
        <div className="text-sm opacity-90 flex flex-col">
          <div>
            {new Date(receipt.receiptTimeStamp).toLocaleDateString("fi-FI")}
          </div>
          <div className="flex text-right">
            <div className="w-1/3 text-left">{receipt.merchant.name}</div>
            <div className="w-1/3">{receipt.products.length} tuotetta</div>
            <div className="w-1/3">
              {(receipt.totalPriceIncVAT / 100).toFixed(2).replace(".", ",")}{" "}
              {receipt.currencyISOCode}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Result;
