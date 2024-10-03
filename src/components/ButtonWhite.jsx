import React from "react";

function ButtonWhite({ text }) {
  return (
    <button class="gradient-button-white flex items-center py-[10px] px-[25px] rounded-md">
      <span class="mr-2 font-[600] text-[14px]">{text}</span>
      <svg
        class="h-4 w-4 transform transition duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
}

export default ButtonWhite;
