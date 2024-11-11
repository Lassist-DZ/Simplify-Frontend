import Navbar from "./navbar";
import Sidebar from "./sidebar";
export function ContentLayout({ title, children }) {
    return (
      <div className="flex">
         <Sidebar />
        
        <Navbar title={title} />
        <div className="lg:ml-[20vw] mt-20 ml-[15vw] max-w-[85vw] py-4 lg:w-[80vw]  lg:max-w-[80vw] w-[85vw] px-8 lg:px-8 bg-[#e6f2fd] h-full flex flex-col gap-8">
          {children}
          </div>
        
      </div>
    );
  }