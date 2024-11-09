import { Mail, MoveUpRight } from "lucide-react";
import RightArrow from "../assets/icons/right-arrow";
import "../assets/styles/components/cta_button.css";

function CTA_Btn({ text, type }) {
  if (type === "cta_hero") {
    return (
      <button className={`cta_hero p-6  gap-2 hidden lg:inline-flex`}>
        <RightArrow />
        <div className="label">{text}</div>
      </button>
    );
  }
  if (type === "cta_hero_mobile") {
    return (
      <button className={`cta_hero_mobile p-6  gap-2 lg:hidden`}>
        <RightArrow />
        <div className="label">{text}</div>
      </button>
    );
  } else if (type === "cta_about") {
    return (
      <button className="cta_about">
        <div>
          {text}
          <MoveUpRight size={24} />
        </div>
      </button>
    );
  } else if (type === "cta_jobs") {
    return (
      <button className="cta_jobs">
        <div>{text}</div>
      </button>
    );
  } else if (type === "cta_nav") {
    return (
      <button className="cta_nav flex flex-col  w-[173px] text-white">
        <div className="container flex flex-col gap-3">
          <div className="hidden-text">
            <MailSvg /> <p>{text}</p>{" "}
          </div>
          <div className="hidden-text2 ">
            <MailSvg /> <p>{text}</p>
          </div>
        </div>
      </button>
    );
  } else if (type === "cta_pricing") {
    return (
      <button className="cta_pricing rounded-[10px] font-size-paragraph px-14 py-3 w-fit">
        {text}
      </button>
    );
  } else if (type === "cta_joinus") {
    return (
      <button className="cta_joinus ">
        <div className="hidden-text">
          <Mail className="pr-1" />
          Let's connect
        </div>
        <div className="hidden-text2">
          <Mail className="pr-1" />
          Let's connect
        </div>
      </button>
    );
  }
}

export default CTA_Btn;

const MailSvg = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pr-1"
    >
      <path
        d="M5.08337 5.08325H17C17.7294 5.08325 18.4289 5.37298 18.9446 5.88871C19.4603 6.40443 19.75 7.10391 19.75 7.83325V16.0833C19.75 16.8126 19.4603 17.5121 18.9446 18.0278C18.4289 18.5435 17.7294 18.8333 17 18.8333H5.08337C4.35403 18.8333 3.65456 18.5435 3.13883 18.0278C2.62311 17.5121 2.33337 16.8126 2.33337 16.0833V7.83325C2.33337 7.10391 2.62311 6.40443 3.13883 5.88871C3.65456 5.37298 4.35403 5.08325 5.08337 5.08325ZM5.08337 5.99992C4.62504 5.99992 4.22171 6.15575 3.91004 6.43075L11.0417 11.0416L18.1734 6.43075C17.8617 6.15575 17.4584 5.99992 17 5.99992H5.08337ZM11.0417 12.1508L3.36921 7.17325C3.29587 7.37492 3.25004 7.60409 3.25004 7.83325V16.0833C3.25004 16.5695 3.44319 17.0358 3.78701 17.3796C4.13083 17.7234 4.59714 17.9166 5.08337 17.9166H17C17.4863 17.9166 17.9526 17.7234 18.2964 17.3796C18.6402 17.0358 18.8334 16.5695 18.8334 16.0833V7.83325C18.8334 7.60409 18.7875 7.37492 18.7142 7.17325L11.0417 12.1508Z"
        fill="white"
      />
    </svg>
  );
};
