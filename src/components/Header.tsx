import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex p-4 h-32">
      <Link href="/" passHref>
        <div className="flex items-center hover:cursor-pointer">
          <AccountBalanceWalletIcon
            className="text-orange mr-2"
            style={{ fontSize: 75 }}
          />
          <div className="text-black titlefont font-semibold text-title">
            eKuitti
          </div>
        </div>
      </Link>
      <div className="flex items-end ml-auto">
        <div className="flex flex-col">
          <div className="flex items-center ml-auto p-1">
            <LanguageIcon className="text-black" style={{ fontSize: 30 }} />
            <div className="text-black font-medium text-menu pl-1 font-sans">
              Suomi
            </div>
            <ArrowDropDownIcon
              className="text-black"
              style={{ fontSize: 30 }}
            />
          </div>
          <div className="flex justify-end pt-1 pr-1">
            <div className="rounded bg-grey p-1 hover:cursor-pointer">
              <SearchIcon className="text-black" style={{ fontSize: 30 }} />
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import fuzzy from "@utils/fuzzy";
import { useReceipts } from "@utils/hooks";
import type { Receipts } from "@typings/hooks/useReceipts";

const extractSearchStrings = (arr: Receipts) => {
  const strings =
    arr.map &&
    arr.map((receipt) => {
      let string = "";
      string += receipt.merchant.name + " ";
      receipt.products.forEach((product) => (string += product.name + " "));
      string += receipt.receiptTimeStamp.split("T")[0] + " ";
      string += (receipt.totalPriceIncVAT / 100)
        .toFixed(2)
        .toString()
        .replace(".", ",");
      return string;
    });
  return strings;
};

type SearchProps = {
  data: string[] | undefined;
  initialQuery?: string;
};

const useSearch = ({ data, initialQuery }: SearchProps) => {
  const [query, setQuery] = useState<string | undefined>(initialQuery);
  const [result, setResult] = useState<any[] | undefined>();
  useEffect(() => {
    if (data && query) {
      const results = fuzzy.find({ data, query });
      setResult(results);
    }
    if (query === "") {
      setResult(undefined);
    }
  }, [data, query]);
  return { result, setQuery };
};

const Search: React.FC = () => {
  const { data } = useReceipts();
  const { result, setQuery } = useSearch({
    data: data && extractSearchStrings(data),
  });
  return (
    <>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {result && (
        <div className="absolute bg-grey z-50 p-2 space-y-2">
          {result.map((result, index) => (
            <div key={index}>{JSON.stringify(result)}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
