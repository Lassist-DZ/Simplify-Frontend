import React from "react";
import CTA_Btn from "../cta_button";

const JoinUs = () => {
  return (
    <div className="px-4 lg:px-48 lg:py-20 w-full py-8 ">
      <div className="bg-white sm:px-32 p-8 flex items-center flex-col  justify-center gap-5 sm:gap-8 text-center w-full  border-2 border-[#243A4E] shadow-lg  rounded-3xl">
        <p className="font-size-paragraph1">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things
        </p>
        <h3>Join Us Now</h3>
        <CTA_Btn type={"cta_nav"} text={"Let's Connect"} />
      </div>
    </div>
  );
};

export default JoinUs;
