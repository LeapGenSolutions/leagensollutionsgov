import React, { useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";

function ImplementationPlan() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const values = [
    {
      name: "Strategic Assessment and Alignment",
      description:
        "We begin by thoroughly assessing business needs and technology capabilities, ensuring alignment with strategic objectives. This includes evaluating team competencies, technology-business mapping, and selecting the appropriate platforms to set a strong foundation for the project.",
    },
    {
      name: "Blueprint Design and  Architectural Planning",
      description:
        "This step involves detailed planning and architectural validation to develop a robust modernization blueprint. It includes creating a backlog, undertaking sprint and group planning, and prioritizing tasks to clearly define project milestones and expected outcomes.",
    },
    {
      name: "Iterative Modernization",
      description:
        "The core of our approach involves an iterative process that allows for continuous improvement through enhancements. This stage includes replication, rigorous testing, and validation processes, ensuring each iteration advances the project towards its ultimate goals.",
    },
    {
      name: "Evaluation and Optimization",
      description:
        "Before the final handoff, we engage in a critical evaluation of the implemented solutions. This involves optimizing the processes based on lessons learned and feedback, preparing the solution for a smooth operational transition.",
    },
    {
      name: "Operational Integration and Handover",
      description:
        "The culmination of the project sees the integration of modernized solutions into existing operations. This step ensures that all functionalities are operational, and the team is well-equipped to manage the new system, concluding with strategic handovers and final operational releases.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <Header from="details" />
      <div className="relative flex flex-col items-center justify-center p-10 bg-[#fff]">
        <h1 className="text-[50px] font-bold gradient-text max-md:text-[30px]">
          Implementation Plan
        </h1>
        <p className="text-base description text-center text-[24px] max-md:text-[16px] my-[2.5rem]">
          At Leapgen Solutions, our modernization process is strategically
          segmented into five detailed steps to ensure seamless integration and
          optimal performance in IT environments.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-[40px] mt-[40px] justify-center mx-[20px]">
        {values.map((data, index) => {
          return (
            <div key={index} className="corevalues_box w-[320px] h-[360px]">
              <h3 className="text-[20px] font-bold">{data.name}</h3>
              <p className="text-[14px] text-[#53535C]">{data.description}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ImplementationPlan;
