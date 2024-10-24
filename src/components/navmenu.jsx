import {NavigationMenu, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuItem, NavigationMenuList} from "../shadcn/ui/navigation-menu"
import { Link } from "react-router-dom"
export default function NavMenu() {

//     return  <nav className="navbar-menu">
//     <ul className="nav">
//       
//       <li className="nav-item">
//         <a href="#services" className="nav-link">Services</a>
//       </li>
//       <li className="nav-item">
//         <a href="#works" className="nav-link">Works</a>
//       </li>
//       <li className="nav-item">
//         <a href="#about" className="nav-link">About</a>
//       </li>
//       <li className="nav-item">
//         <a href="#latest_news" className="nav-link">Latest news</a>
//       </li>
//       <li className="nav-item">
//         <a href="#testimonials" className="nav-link">Testimonials</a>
//       </li>
//       <li className="nav-item">
//         <a href="#contact" className="nav-link">Contact</a>
//       </li>
//     </ul>
//   </nav>
return <NavigationMenu className="navbar-menu">
<NavigationMenuList className="nav flex items-start ">
<NavigationMenuItem className="nav-item py-2 px-4">
  <Link to="/" className="nav-link" >
      Home
  </Link>
</NavigationMenuItem>
<NavigationMenuItem className="nav-item py-2 px-4">
  <Link to="/about" className="nav-link">
  
      About
    
  </Link>
</NavigationMenuItem>
<NavigationMenuItem className="nav-item py-2 px-4">
  <Link to="/services" className="nav-link">
   
      Services
  </Link>
</NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
}