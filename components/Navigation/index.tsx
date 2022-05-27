import { useRouter } from "next/router";

import NavItem from "./NavItem";
import menus from "./menus.json";

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between px-4 py-2">
      {menus.map((m) => {
        if (router.pathname === "/" && m.url.startsWith("/receipts")) {
          return <NavItem item={m} selected={true} key={m.menu} />;
        }
        return (
          <NavItem
            key={m.menu}
            item={m}
            selected={router.pathname.startsWith(m.url)}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
