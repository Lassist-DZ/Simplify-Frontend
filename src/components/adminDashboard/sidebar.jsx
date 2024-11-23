import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { cn } from "../../shadcn/lib/utils";
import { getMenuList } from "../../shadcn/lib/menu-list";
import CTA_Btn from "../cta_button";
import { ScrollArea } from "../../shadcn/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "../../shadcn/ui/tooltip";
const Sidebar = () => {
  const pathname = useLocation().pathname;
  const menuList = getMenuList(pathname);
  return (
    <nav className="fixed top-0 left-0 z-20 px-3 flex flex-col py-4 h-screen overflow-y-auto lg:max-w-[20vw] lg:w-[20vw] w-[15vw] max-w-[15vw]  bg-[#243a4e] overflow-hidden">

  <ScrollArea className="w-full  h-screen   " >
    <div className="h-full flex flex-col justify-between">
    <ul className="  ">
         
         {menuList.map(({ groupLabel, menus }, index) => (
            <li className={`w-full ${groupLabel ? "pt-5" : ""}`} key={index}>
              {groupLabel && (
                <p className=" text-[#6fa6d9] lg:text-start text-center ">
                  {groupLabel}
                </p>
              )}
              {menus.map(({ href, label, icon: Icon, active }, index) => (
                <div className="w-full text-[#dfddd9] " key={index}>
                  <TooltipProvider disableHoverableContent>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                          <Link to={href}>
                           
                           
                        <CTA_Btn type={"max-w-[200px] truncate w-full h-12 lg:justify-start justify-center  "} text={label} icon={<Icon size={18} />}/>
                          </Link>
                      
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </li>
          ))}
        
        </ul>
          <div className="w-full flex justify-center ">
            <TooltipProvider disableHoverableContent>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CTA_Btn type={"text-white bg-transparent lg:border px-10 rounded-[10px]"} text={"Logout"} icon={<LogOut size={18} />}/>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </div>
    </div>
      
      
    </ScrollArea>

</nav>
  );
};

export default Sidebar;

