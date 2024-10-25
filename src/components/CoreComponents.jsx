import React from "react";
import "../index.css";
import Carousel from "./Carousel";
import pdf_file from "../assets/LeapGen Gov Brochure 2024.pdf"

function CoreComponents() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,rgb(225,228,247) 100%)",
      }}
      className="flex flex-col items-center py-[80px] max-md:p-[40px]"
    >
      <h2 className="text-[36px] font-bold gradient-text max-md:text-[30px]">
        ✦ Core Competencies
      </h2>
      <p className="text-[#252525] text-[16px] font-[500] mt-[20px] text-center mb-[30px] w-[70%] max-md:text-[14px]">
        Within LeapGen Solutions' Core Competencies, we encapsulate the
        essential strengths and cutting-edge expertise that define our
        excellence in the AI industry. Here we spotlight the technological
        prowess and innovative strategies that empower our clients to lead their
        markets.
      </p>
      <a
        className="text-[18px] font-semibold border-[1px] border-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg shadow-lg flex flex-row items-center justify-center gap-2 mb-4"
        href={pdf_file}
        download={"LeapGen Gov Brochure 2024.pdf"}>
        Download our brochure now!
      </a>
      <Carousel />
    </div>
  );
}

export default CoreComponents;
