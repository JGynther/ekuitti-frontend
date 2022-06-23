type Submenu = {
  title: string;
  url?: string;
};

type NavItemProps = {
  item: {
    menu: string;
    url: string;
    submenus: Submenu[];
  };
  selected: boolean;
};

type DropdownProps = {
  baseUrl: string;
  items: Submenu[];
};

export type { NavItemProps, DropdownProps };
