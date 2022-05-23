import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header: React.FC = () => {
  return (
    <div className="flex p-4 h-40">
      <div className="flex items-center">
        <AccountBalanceWalletIcon
          className="text-orange mr-2"
          style={{ fontSize: 75 }}
        />
        <div className="text-black titlefont font-semibold text-title">
          eKuitti
        </div>
      </div>
      <div className="flex items-end ml-auto">
        <div className="flex flex-col">
          <div className="flex items-center ml-auto p-1">
            <LanguageIcon className="text-black" style={{ fontSize: 33 }} />
            <div className="text-black font-medium text-menu pl-1 font-sans">
              Suomi
            </div>
            <ArrowDropDownIcon
              className="text-black"
              style={{ fontSize: 33 }}
            />
          </div>
          <div className="flex justify-end pt-1 pr-1">
            <div className="rounded bg-grey p-1">
              <SearchIcon className="text-black" style={{ fontSize: 33 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
