import React, { useState } from "react";
import Logo from "../assets/logo_full.avif";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = ({ handleMenuClick, from }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-[#fff] py-[10px] shadow-md sticky z-50 px-[30px] top-0 flex items-center justify-between max-md:gap-[20px] max-md:flex-row">
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden max-md:block"
        onClick={toggleNav}
      >
        <path
          d="M0 1.42857C0 1.04969 0.15051 0.686328 0.418419 0.418419C0.686328 0.15051 1.04969 0 1.42857 0H24.2857C24.6646 0 25.028 0.15051 25.2959 0.418419C25.5638 0.686328 25.7143 1.04969 25.7143 1.42857C25.7143 1.80745 25.5638 2.17081 25.2959 2.43872C25.028 2.70663 24.6646 2.85714 24.2857 2.85714H1.42857C1.04969 2.85714 0.686328 2.70663 0.418419 2.43872C0.15051 2.17081 0 1.80745 0 1.42857ZM0 10C0 9.62112 0.15051 9.25776 0.418419 8.98985C0.686328 8.72194 1.04969 8.57143 1.42857 8.57143H24.2857C24.6646 8.57143 25.028 8.72194 25.2959 8.98985C25.5638 9.25776 25.7143 9.62112 25.7143 10C25.7143 10.3789 25.5638 10.7422 25.2959 11.0102C25.028 11.2781 24.6646 11.4286 24.2857 11.4286H1.42857C1.04969 11.4286 0.686328 11.2781 0.418419 11.0102C0.15051 10.7422 0 10.3789 0 10ZM1.42857 17.1429C1.04969 17.1429 0.686328 17.2934 0.418419 17.5613C0.15051 17.8292 0 18.1925 0 18.5714C0 18.9503 0.15051 19.3137 0.418419 19.5816C0.686328 19.8495 1.04969 20 1.42857 20H24.2857C24.6646 20 25.028 19.8495 25.2959 19.5816C25.5638 19.3137 25.7143 18.9503 25.7143 18.5714C25.7143 18.1925 25.5638 17.8292 25.2959 17.5613C25.028 17.2934 24.6646 17.1429 24.2857 17.1429H1.42857Z"
          fill="#000"
        />
      </svg>
      {from ? (
        <div className="flex flex-row w-full justify-between">
          <img className="w-[250px] h-[42px] max-md:hidden" src={Logo} alt="" />
          <Link to={`/`}>
            <Button text="Leapgen Solutions" />
          </Link>
        </div>
      ) : (
        <>
          <img
            className="w-[250px] h-[42px] hidden max-md:block"
            src={Logo}
            alt=""
          />
          <nav
            className={`fixed top-0 left-0 h-full bg-[#fff] transition-transform duration-300 ease-in-out transform ${
              navOpen ? "translate-x-0" : "-translate-x-full"
            } max-md:block border-r-[0.2px] border-r-[#000] w-1/2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleNav}
              className={`max-md:${!navOpen ? "hidden" : "block"} m-8`}
            >
              <path
                d="M19.4818 17.0413C20.1727 17.733 20.1727 18.8088 19.4818 19.5005C19.1363 19.8463 18.714 20 18.2534 20C17.7927 20 17.3704 19.8463 17.025 19.5005L10 12.4688L2.97505 19.5005C2.62956 19.8463 2.20729 20 1.74664 20C1.28599 20 0.863724 19.8463 0.518234 19.5005C-0.172745 18.8088 -0.172745 17.733 0.518234 17.0413L7.54319 10.0096L0.518234 2.97791C-0.172745 2.28626 -0.172745 1.21037 0.518234 0.518732C1.20921 -0.172911 2.28407 -0.172911 2.97505 0.518732L10 7.55043L17.025 0.518732C17.7159 -0.172911 18.7908 -0.172911 19.4818 0.518732C20.1727 1.21037 20.1727 2.28626 19.4818 2.97791L12.4568 10.0096L19.4818 17.0413Z"
                fill="#FFBFFF"
              />
            </svg>
            <ul className="flex gap-[20px] flex-col p-8">
              <img className="w-[250px] h-[42px]" src={Logo} alt="" />
              <li onClick={() => handleMenuClick("hero")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Home
                </button>
              </li>
              <li onClick={() => handleMenuClick("leapgen")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Leapgen.ai
                </button>
              </li>
              <li onClick={() => handleMenuClick("core")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Values
                </button>
              </li>
              <li onClick={() => handleMenuClick("comp")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Competencies
                </button>
              </li>
              <li onClick={() => handleMenuClick("success")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Stories
                </button>
              </li>
              <li onClick={() => handleMenuClick("plans")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Solutions
                </button>
              </li>
              <Link to="/partners">
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Partners
                </button>
              </Link>
              <li onClick={() => handleMenuClick("connect")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
          <nav
            className={`flex flex-row items-center justify-between w-full max-md:hidden`}
          >
            <img className="w-[250px] h-[42px] mr-[1rem]" src={Logo} alt="" />
            <ul className="flex gap-[20px]">
              <li onClick={() => handleMenuClick("hero")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Home
                </button>
              </li>
              <li onClick={() => handleMenuClick("leapgen")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Leapgen.ai
                </button>
              </li>
              <li onClick={() => handleMenuClick("core")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Values
                </button>
              </li>
              <li onClick={() => handleMenuClick("comp")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Competencies
                </button>
              </li>
              <li onClick={() => handleMenuClick("success")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Stories
                </button>
              </li>
              <li onClick={() => handleMenuClick("plans")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Solutions
                </button>
              </li>
              <Link to="/partners">
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Partners
                </button>
              </Link>
              <li onClick={() => handleMenuClick("connect")}>
                <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
