import React from "react";
import "../index.css";
import Core1 from "../assets/corevalues/core1.avif";
import Core2 from "../assets/corevalues/core2.avif";
import Core3 from "../assets/corevalues/core3.avif";
import Core4 from "../assets/corevalues/core4.avif";

function CoreValues() {
  const values = [
    {
      name: "Tailoring",
      description:
        "At LeapGen solutions, we excel in tailoring AI solutions to precisely fit the unique requirements of your business. Our approach ensures that each solution enhances your specific processes, boosts efficiency, and unlocks new possibilities in customer engagement and operational agility. Embrace customization with LeapGen solutions, where your business needs drive our innovation.",
      image: Core1,
    },
    {
      name: "Teach and learn.",
      description:
        "At LeapGen solutions, we embrace a dynamic cycle of teaching and learning, continually evolving our expertise to stay at the forefront of AI technology. We not only educate our clients on the latest AI advancements but also learn from each collaboration, ensuring that our solutions and services are both innovative and deeply informed by real-world applications. This approach empowers us to enhance and adapt our offerings to meet the ever-changing needs of the industries we serve.",
      image: Core2,
    },
    {
      name: "Gathering Insights",
      description:
        "At LeapGen solutions, we specialize in gathering insights that drive transformative outcomes. Our AI solutions are designed to meticulously analyze data, uncovering valuable patterns and trends that inform strategic decisions. This insight-driven approach ensures that our clients are equipped to make informed decisions, optimize operations, and propel their businesses forward with precision and confidence.",
      image: Core3,
    },
    {
      name: "Diversity and Inclusion",
      description:
        "At LeapGen solutions, we are dedicated to cultivating an environment that champions diversity and inclusion. We value and integrate varied perspectives and experiences to drive innovation, ensuring that all team members feel respected, valued, and empowered to achieve collective and individual success. Our commitment to diversity is integral to our mission of redefining industries with cutting-edge AI solutions.",
      image: Core4,
    },
  ];

  return (
    <div className="corevalues_background max-md:p-[40px]">
      <h2 className="text-[36px] font-bold gradient-text max-md:text-[30px]">
        ✦ Core Values
      </h2>
      <p className="text-[#252525] text-[16px] font-[500] mt-[20px] text-center max-md:text-[14px]">
        At LeapGen Solutions, we believe in harnessing the power of knowledge to
        enhance
        <br /> our AI-driven solutions.Explore how our commitment to continuous
        innovation and
        <br /> inclusive culture shapes the cutting-edge solutions we deliver to
        our clients.
      </p>
      <div className="flex flex-row flex-wrap gap-[40px] mt-[40px] justify-center">
        {values.map((data, index) => {
          return (
            <div
              key={index}
              className="corevalues_box max-md:w-full max-md:h-full"
            >
              <img className="h-[40px] w-[40px]" src={data.image} alt="" />
              <h3 className="text-[20px] font-bold">{data.name}</h3>
              <p className="text-[14px] text-[#53535C]">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreValues;
