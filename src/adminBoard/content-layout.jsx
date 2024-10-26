import { Navbar } from "./components/navbar";
import Menu from "./components/sidebar";
export function ContentLayout({ title, children }) {
    return (
      <div className="admin-panel-layout w-[80vw] mt-8 ml-[20vw]">
         <Menu />
        <Navbar title={title} />
        <div className="container pt-8 pb-8 px-4 sm:px-8 bg-[#18181B] h-full flex flex-col gap-8">{children}</div>
        
      </div>
    );
  }