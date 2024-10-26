import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../shadcn/ui/navigation-menu";
import { Link } from "react-router-dom";
import CTA_Btn from "./cta_button";
export default function NavMenu() {
  return (
   
      <NavigationMenuList className=" nav flex flex-col lg:flex-row gap-4  lg:gap-0 lg:items-center items-start ">
        <NavigationMenuItem className="py-2 px-4 nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 px-4  nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 px-4   nav-item">
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 px-4   nav-item lg:hidden">
          <Link to="/jobs" className="nav-link">
          Find Job
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 px-4   nav-item lg:hidden">
          <Link to="/book" className="nav-link">
          Book a Call
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
  
  );
}
