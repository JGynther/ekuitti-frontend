import { useRouter } from "next/router";

import NavItem from "./NavItem";
import menus from "./menus.json";

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between px-4 py-2">
      {menus.map((m) => {
        if (m.url === "/" || m.url === "/receipts") {
          return <NavItem 
            item={m} 
            selected={
              router.pathname === "/" 
              || router.pathname.startsWith("/receipts") 
              || router.pathname === "/search"
            }
            key={m.menu} 
          />;
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
