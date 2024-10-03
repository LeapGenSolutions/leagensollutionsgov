import React from "react";
import "../index.css";
import Button from "./Button";

const AdditionalInfo = () => {
  const AdditionalInfo = [
    {
      id: 1,
      title: "Cage Code: 9WRA1",
    },
    {
      id: 2,
      title: "Unique Entity ID: N5PWUGWWK2P3",
    },
    {
      id: 3,
      title: "DUNS: 12-893-8390",
    },
    {
      id: 4,
      title: "Cage Code: 9WRA1",
    },
    {
      id: 5,
      title: "Unique Entity ID: N5PWUGWWK2P3",
    },
    {
      id: 6,
      title: "DUNS: 12-893-8390",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-10 bg-white py-[80px] max-md:pt-[0px]">
      <h2 className="text-[36px] font-bold gradient-text mb-[40px]">
        ✦ Additional Information
      </h2>

      <div className="slider">
        <div className="slider-track gap-[20px]">
          {AdditionalInfo.concat(AdditionalInfo).map((partner, index) => (
            <Button text={partner.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
