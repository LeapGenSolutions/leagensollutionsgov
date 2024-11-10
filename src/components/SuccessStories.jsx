import React, { useState, useEffect } from "react";
import "../index.css";
import { useSpring, animated } from "react-spring";
import Success1 from "../assets/success/success1.avif";
import Success2 from "../assets/success/success2.avif";
import Success3 from "../assets/success/success3.avif";

function Card({
  title,
  desc1,
  desc2,
  desc3,
  index,
  activeCardIndex,
  setActiveCardIndex,
  num,
  image,
}) {
  const isActive = index === activeCardIndex;
  const [zIndex, setZIndex] = useState(index);

  const [{ y }, set] = useSpring(() => ({
    y: index * 100,
    config: { mass: 1, tension: 280, friction: 12 },
  }));

  useEffect(() => {
    if (isActive) {
      set({ y: 200 }); // Move active card down
      setZIndex(3); // Bring active card to the front
    } else if (activeCardIndex !== null) {
      set({ y: (index > activeCardIndex ? index - 1 : index) * 100 });
      setZIndex(index > activeCardIndex ? index - 1 : index);
    } else {
      set({ y: index * 100 });
      setZIndex(index);
    }
  }, [isActive, activeCardIndex, index, set]);

  const handleClick = () => {
    setActiveCardIndex(index);
  };

  return (
    <animated.div
      className="card max-md:flex-col max-md:p-6 m-[20px] max-md:gap-4"
      style={{
        transform: y.interpolate((y) => `translateY(${y}px)`),
        zIndex,
      }}
      onClick={handleClick}
    >
      <div className="flex flex-col gap-[24px] text-[#666C77] max-md:gap-2">
        <div className="flex flex-row items-center gap-[16px]">
          <h4 className="rounded-full border border-[#eee] h-[64px] w-[64px] flex items-center justify-center text-[36px] text-[#7A7A7A] max-md:text-[26px]">
            {num}
          </h4>
          <h3 className="text-[34px] text-[#22221E] max-md:text-[22px]">
            {title}
          </h3>
        </div>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
      </div>
      <img
        className="w-[360px] h-[510px] rounded-[12px] max-md:w-full max-md:h-fit"
        src={image} alt=""
      />
    </animated.div>
  );
}

function SuccessStories() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    <Card
      key={0}
      index={0}
      num={"01"}
      activeCardIndex={activeCard}
      setActiveCardIndex={setActiveCard}
      image={Success1}
      title="Modern Application Development​"
      desc1="The application that supports the Medicare provider and supplier enrollment process by capturing provider/supplier information​."
      desc2="Challenge​ ​  The application was monolithic, very complicated to maintain, systems are not integrated with each other. Manual workflow and high-performance issues​"
      desc3="The  front was developed using Angular.​  Traffic Manager ​  The application is deployed to be highly available on multiple regions​  The Application Gateway​  Is integrated with other Azure services and Azure Traffic Manager  to support multiple-region redirection, automatic failover, and zero-downtime maintenance​  ​"
    ></Card>,
    <Card
      key={1}
      index={1}
      num={"02"}
      activeCardIndex={activeCard}
      setActiveCardIndex={setActiveCard}
      image={Success2}
      title="Cloud Migration​"
      desc1="The goal is to build a resilient hybrid  infrastructure where they can unleash the power of cloud as an extension to On-premise data center. ​"
      desc2="Challenge​ ​  The agency's high priority is to build highly scalable data and AI workloads. There are many limitations with the existing ​ on-Prem data centers like old hardware, cannot scale, Out of Support etc.​  ​  It was very important to step up in the game to host various critical applications that operate on larger data sets."
      desc3="Solution:​  ​  Express route and Site-to-site VPN is built to Azure. We used Azure site recovery​  Back and restore the databases to Azure SQL Managed Instance and SQL Virtual Machines​  Data Migration Assistant​  Azure Migrate to assess the databases to understand if there are any blockers or limitations​"
    ></Card>,
    <Card
      key={2}
      index={2}
      num={"03"}
      activeCardIndex={activeCard}
      setActiveCardIndex={setActiveCard}
      image={Success3}
      title="Modern Data Analytics & AI​"
      desc1="Customer is a NY agency who is stepping into cloud journey. The goal is to build a resilient hybrid  infrastructure where they can unleash the power of cloud as an extension to On-premise data center. "
      desc2="Challenge​ ​  Disparate data sources with 90 databases often redundant data.​  Inability to combine streaming and history data.​  No data governance mechanism and master data challenges.​  Difficulty in finding and accessing data when business needs to make decisions.​  Siloed applications which do not talk to each other."
      desc3="The solution was to stream data from various IOT sensors, historians and other data sources into ​  Microsoft’s Azure Synapse Analytics for real time insight generation."
    ></Card>,
  ];

  return (
    <div className="flex flex-col items-center py-[80px]">
      <h2 className="text-[36px] font-bold gradient-text">✦ Success Stories</h2>
      <p className="text-[#252525] text-[16px] font-[500] mt-[20px] text-center mb-[50px] mx-[20px] w-[70%] max-md:text-[14px] max-md:mb-[20px]">
        Dive into LeapGen Solutions Success Stories, where we celebrate the
        tangible impacts of our AI initiatives across various industries. These
        narratives showcase the strategic implementation of our AI and analytics
        expertise, resulting in significant advancements for our clients.
      </p>
      <div className="card-container">{cards}</div>
    </div>
  );
}

export default SuccessStories;
