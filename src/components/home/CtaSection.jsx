import React from "react";

const CtaSection = () => {
  return (
    <div className="px-4 lg:px-16 w-full py-8 ">
      <div className="bg-white sm:p-20 p-8 flex items-center flex-col  justify-center gap-5 sm:gap-8 text-center w-full h-[304px] sm:h-[558px] border-2 border-[#243A4E] shadow-lg  rounded-3xl">
        <div className="font-size-paragraph text-blue-600 py-1 sm:py-3 bg-white border border-[#4F66E1]   px-7  rounded-full">
          Perfect for Tech and SaaS
        </div>
        <p
          className="
  text-center
  

  text-[16px] 
  font-semibold
  text-[#2D2C2B] 
  leading-[24px] 
  md:text-[57px] 
  md:font-medium
  md:leading-none 
  md:text-neutral-600
"
        >
          Streamlined design and development. Swift and remarkable results.
        </p>

        <p className="font-size-paragraph ">
          No fluff, no long processes, no bloated teams
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full  hover:bg-blue-700 transition duration-300">
          Let's connect
        </button>
      </div>
    </div>
  );
};

export default CtaSection;
