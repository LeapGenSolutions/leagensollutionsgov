import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";

function ProfessionalServices() {
  const values = [
    {
      name: "Strategic Business Assessment & Alignment ",
      description:
        "We begin by conducting a detailed assessment of your business needs and technological landscape. Our goal is to align these elements with your strategic objectives, evaluating team competencies and mapping technology to business goals. This foundational step ensures we select the most appropriate platforms and set a robust groundwork for the project.",
    },
    {
      name: "Tailored Solution Design & Architectural Planning ",
      description:
        "Collaborating closely with your stakeholders, we design customized solutions tailored to your unique requirements. This phase involves meticulous planning and architectural validation to create a strategic blueprint. By prioritizing tasks and milestones, we outline a clear and achievable project roadmap.",
    },
    {
      name: "Agile Development&Iterative Implementation ",
      description:
        "Utilizing agile methodologies, we ensure flexibility and continuous improvement throughout the development process. Iterative sprints allow us to develop, test, and refine solutions, with each iteration bringing us closer to the project’s objectives. This dynamic approach enables real-time enhancements based on feedback and evolving needs.",
    },
    {
      name: "Seamless System Integration & Validation",
      description:
        "Our integration process is designed to incorporate new solutions smoothly into your existing systems. Rigorous testing validates functionality, security, and performance, minimizing disruptions and ensuring a seamless transition to the new system.",
    },
    {
      name: "Extensive Training & Ongoing Support",
      description:
        "We provide comprehensive training programs to ensure your team is well-prepared to operate and manage the new systems. Our commitment extends beyond deployment, offering ongoing support services to address any issues and maintain optimal performance.",
    },
    {
      name: "Continuous Performance Monitoring & Optimization ",
      description:
        "Post-deployment, we continuously monitor the performance of the implemented solutions using advanced analytics. This allows us to identify areas for improvement and optimize processes, ensuring continued alignment with your business objectives and enhancing efficiency and effectiveness.",
    },
    {
      name: "Strategic Handover & Sustained Improvement",
      description:
        "The final phase involves integrating the modernized solutions into your operations, ensuring your team is fully prepared to manage the new systems. We conclude with a strategic handover and final operational release, remaining committed to continuous improvement and incorporating feedback for future enhancements.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <Header from="details" />
      <div className="relative flex flex-col items-center justify-center p-10 bg-[#fff]">
        <h1 className="text-[50px] font-bold gradient-text max-md:text-[30px]">
          Professional Services
        </h1>
        <p className="text-base description text-center text-[24px] max-md:text-[16px] my-[2.5rem]">
          LeapGen Solutions provides professional services that integrate AI to
          automate tasks such as system monitoring, email management, and
          workflow automation. Focusing on AI, they enhance customer
          interactions and operational efficiency across sectors like healthcare
          and finance, transforming traditional service strategies with
          cutting-edge technology.
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

export default ProfessionalServices;
