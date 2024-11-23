import SimplifyLogo from "../../assets/icons/simplify_logo";
import { Link } from "react-router-dom";

export default function Navbar({ title }) {
  return (
    <header className="fixed bg-[#e6f2fd] top-0 z-10  lg:left-[20vw] flex justify-between items-center py-2   h-20 left-[15vw] max-w-[80vw] px-6 lg:w-[80vw] w-[85vw] max-w-[85vw] shadow backdrop-blur">
       
          <h4 className="font-bold  text-black">{title}</h4>
      <SimplifyLogo/>
 
    </header>
  );
}
