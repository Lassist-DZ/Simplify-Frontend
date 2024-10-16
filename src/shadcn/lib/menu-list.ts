import {
  BadgeDollarSign,
  Bookmark,
  Calendar1,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
      
        {
          href: "/consultations",
          label: "Consultation",
          icon: Calendar1
        },
        {
          href: "/pricings",
          label: "Pricing Models",
          icon: BadgeDollarSign
        },

      ]
    }
  ];
}
