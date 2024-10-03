import React from "react";
import "../index.css";
import CheckIcon from "../assets/corevalues/download.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

function Plans() {
  const values = [
    {
      name: "Professional Services",
      items: [
        "AI-Driven Transformation",
        "Broad Sector Application",
        "Routine Automation",
        "Data Insights",
        "Decision Support",
      ],
    },
    {
      name: "Implementation Plan",
      items: [
        "Strategic Assessment and Alignment",
        "Blueprint Design and Architectural Planning",
        "Iterative Modernization",
        "Evaluation and Optimization",
        "Operational Integration and Handover",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-[80px] max-md:mt-[100px]">
      <h2 className="text-[36px] font-bold gradient-text">✦ Plans</h2>
      <p className="text-[#252525] text-[16px] font-[500] mt-[20px] text-center">
        Discover how LeapGen Solutions leverages AI to transform professional
        services <br /> across a wide range of sectors, ensuring our strategic
        implementation maximizes <br />
        innovation and efficiency for each client.
      </p>
      <div className="flex flex-row flex-wrap gap-[40px] mt-[40px] justify-center">
        {values.map((data, index) => {
          return (
            <div
              key={index}
              className="plans_box max-md:mx-[20px] max-md:w-full"
            >
              <h3 className="text-[24px] font-bold gradient-text">
                {data.name}
              </h3>
              <div className="flex gap-[10px] flex-col">
                {data.items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-[10px]"
                    >
                      <img className="h-[24px] w-[24px]" src={CheckIcon} alt="" />
                      <p className="text-[#666666] text-[14px] font-[600]">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
              <Link
                to={
                  data.name === "Implementation Plan"
                    ? "/ImplementationPlan"
                    : "/ProfessionalServices"
                }
              >
                <Button text="Get Started" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
