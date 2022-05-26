import { DropdownProps } from "./types";
import ArrowRightnIcon from "@material-ui/icons/ArrowRight";
import Link from "next/link";

const Dropdown: React.FC<DropdownProps> = ({ items, baseUrl }) => {
  return (
    <div className="w-full flex flex-col absolute top-[54px] bg-blue text-white pb-3">
      <hr className="bg-grey" style={{ height: "2px" }} />
      {items.map(m => {
      return <Link href={baseUrl}>
          <div className="w-full flex justify-between px-3 pt-3 hover:cursor-pointer text-submenu font-light">
            {m.title}
            <ArrowRightnIcon style={{ fontSize: "27px" }} />
          </div>
        </Link>
      })}
    </div>
  );
};

export default Dropdown;
