import { NavItemProps } from "./types";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { RefObject, useMemo, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import useOnClickOutside from "@utils/useOnClickOutside";

const NavItem: React.FC<NavItemProps> = ({ item, selected }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const classes = useMemo(() => {
    let borders = "";
    if (item.url.startsWith("/receipts")) {
      borders = selected || isOpen ? "" : "border-l-2 border-grey ";
    }
    return borders + (selected || isOpen ? "bg-blue text-white" : "border-y-2 border-r-2 border-grey")
  }, [selected, isOpen]);

  return (
    <div className="w-full flex flex-col relative" ref={ref}>
      <div className={classes + " flex justify-between h-14 px-3"}>
        <Link href={item.url}>
          <div className="h-fit text-menu font-medium self-center hover:cursor-pointer">{item.menu}</div>
        </Link>
        <ArrowDropDownIcon
          className={selected || isOpen ? "text-white" : "text-black"}
          style={{ fontSize: 33, alignSelf: "center", cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        <Dropdown items={item.submenus} baseUrl={item.url} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavItem;
