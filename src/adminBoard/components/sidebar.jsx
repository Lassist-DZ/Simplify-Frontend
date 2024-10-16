import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { cn } from "../../shadcn/lib/utils";
import { getMenuList } from "../../shadcn/lib/menu-list";
import { Button } from "../../shadcn/ui/button";
import { ScrollArea } from "../../shadcn/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "../../shadcn/ui/tooltip";

const Menu = () => {
  const pathname = useLocation().pathname;
  const menuList = getMenuList(pathname);

  return (
    <aside className="fixed top-0 left-0 z-20 h-screen w-[20vw] overflow-hidden">
<div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
  {/* Brand or Logo */}
  <Button className="mb-1" variant="link" asChild>
    <Link href="/dashboard" className="flex items-center gap-2">
      <h1 className="font-bold text-3xl text-white whitespace-nowrap">Simplify</h1>
    </Link>
  </Button>

  <ScrollArea className="">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {groupLabel && (
                <p className="text-md font-medium text-blue-700 px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              )}
              {menus.map(({ href, label, icon: Icon, active }, index) => (
                <div className="w-full text-gray-300" key={index}>
                  <TooltipProvider disableHoverableContent>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Button
                          variant={
                            (active === undefined &&
                              pathname.startsWith(href)) ||
                            active
                              ? "secondary"
                              : "ghost"
                          }
                          className="w-full justify-start h-10 mb-1 flex gap-2"
                          asChild
                        >
                          <Link to={href}>
                            <span >
                              <Icon size={18} />
                            </span>
                            <p className="max-w-[200px] truncate">
                              {label}
                            </p>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {}}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5 bg-transparent text-white flex"
                  >
                    <span className="mr-4">
                      <LogOut size={18} />
                    </span>
                    <p className="whitespace-nowrap opacity-100">Logout</p>
                  </Button>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    </ScrollArea>
</div>
</aside>
  );
};

export default Menu;

