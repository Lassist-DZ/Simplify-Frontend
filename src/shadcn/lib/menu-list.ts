import {
  BadgeDollarSign,
  Bookmark,
  Calendar1,
  LayoutGrid,
  LucideIcon,
  MailQuestionIcon,
  Star
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
          href: "/admin/dashboard",
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
          href: "/admin/consultations",
          label: "Consultation",
          icon: Calendar1
        },
        {
          href: "/admin/pricings",
          label: "Pricing Models",
          icon: BadgeDollarSign
        },
        {
          href: "/admin/newsletter_subs",
          label: "Newsletter",
          icon: MailQuestionIcon
        },
        {
          href: "/admin/testimonials",
          label: "Testimonials",
          icon: Star
        },
        

      ]
    }
  ];
}
