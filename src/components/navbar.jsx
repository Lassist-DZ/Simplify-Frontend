import React, { useEffect } from "react";
import SimplifyLogo from "../assets/icons/simplify_logo";
import NavMenu from "./navmenu";
import CTA_Btn from "./cta_button";
import { Menu, X } from "lucide-react";
import "../assets/styles/components/navbar.css";
import { NavigationMenu } from "../shadcn/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`${
        isMenuOpen
          ? "bg-black bg-opacity-55 h-full  pt-8  px-12 items-start"
          : "rounded-[100px] mt-5 h-[62px] mx-6 items-center"
      } z-[999] fixed lg:mx-16 nav-container lg:mt-5 flex lg:items-center  justify-between gap-20 px-6 lg:px-16 lg:h-[90px] py-5 lg:rounded-[100px] lg:bg-white lg:bg-opacity-20`}
      style={{
        backdropFilter: isMenuOpen ? "" : "blur(100px)",
        width:
          window.innerWidth >= 1024
            ? "calc(100% - 128px)"
            : isMenuOpen
            ? "calc(100%)"
            : "calc(100% - 48px)",
      }}
    >
     
      <div className="flex items-center  z-[999]">
      
        <SimplifyLogo />
      </div>

      <button
        className="lg:hidden z-[999]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <X size={36} color="white" />
        ) : (
          <Menu size={36} color="#144760" />
        )}
      </button>

      <NavigationMenu
        className={`${
          isMenuOpen
            ? "flex h-screen translate-x-0 inset-0 bg-opacity-20 bg-white items-start font-size-button text-white"
            : "hidden font-size-hyperlink text-[#2a2928]"
        } fixed lg:static lg:flex flex-col lg:flex-row lg:text-[#2a2928] lg:items-center gap-20 lg:p-0 p-8 pt-16 lg:bg-transparent lg:justify-between lg:font-size-hyperlink `}
        style={{
          backdropFilter: isMenuOpen ? "blur(100px)" : "none",
        }}
      >
        <NavMenu />
        <div className="lg:gap-6 lg:flex-row items-center flex-col hidden lg:flex">
          <Link to={"/jobs"}>
          <CTA_Btn type={"cta_jobs"} text={"Find Job"} />
          </Link>
          <CTA_Btn type={"cta_nav"} text={"Book a Call"} />
        </div>
      </NavigationMenu>
    </header>
  );
}
