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
            <Link href="/search" passHref>
              <div className="rounded bg-grey p-1 hover:cursor-pointer">
                <SearchIcon className="text-black" style={{ fontSize: 30 }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
