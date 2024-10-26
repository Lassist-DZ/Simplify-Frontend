// import { ModeToggle } from "@/components/mode-toggle";
// import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { Button } from "../../shadcn/ui/button";

export function Navbar({ title }) {
  return (
    <header className="fixed top-0 z-10 w-[80vw] shadow backdrop-blur admin-menubar">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="font-bold text-white">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
        <div className="outline rounded-full text-white disabled bg-transparent px-4 py-2">
        lamia.hamdi1406@gmail.com
        </div>
       
        </div>
      </div>
    </header>
  );
}
