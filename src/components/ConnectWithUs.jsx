import React from "react";
import "../index.css";
import ButtonWhite from "./ButtonWhite";

function ConnectWithUs() {
  return (
    <div className="connectwithus m-[40px] py-[50px] px-[60px] rounded-[20px] flex flex-row justify-between gap-[20px] flex-wrap max-md:px-[30px] max-md:py-[30px] max-md:m-[20px]">
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[36px] text-[#fff] font-[600]">Connect With Us</h2>
        <p className="text-[#fff]">
          44790 Maynard Square Suite 350, Ashburn, Virginia 20147
        </p>
        <div className="flex flex-row gap-[20px]">
          <a target="_blank" rel="noreferrer" href="https://x.com/LeapgenAi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="#fff"
              className="h-[28px] w-[28px] cursor-pointer"
            >
              <g color="rgb(255, 255, 255)" weight="fill">
                <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </g>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/leapgen_solutions/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="#fff"
              className="h-[28px] w-[28px] cursor-pointer"
            >
              <g color="rgb(255, 255, 255)" weight="fill">
                <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
              </g>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/leap-gen-solutions/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="#fff"
              className="h-[28px] w-[28px] cursor-pointer"
            >
              <g color="rgb(255, 255, 255)" weight="fill">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
              </g>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@leapgensolutionsgov"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="#fff"
              className="h-[28px] w-[28px] cursor-pointer"
            >
              <g color="rgb(255, 255, 255)" weight="fill">
                <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <a href="tel:+16097226768" class="phone-button">
          <ButtonWhite text={"+1 609 722 6768"} />
        </a>
        <a href="mailto:contact@leapgen.ai" class="email-button">
          <ButtonWhite text={"contact@leapgen.ai"} />
        </a>
      </div>
    </div>
  );
}

export default ConnectWithUs;
