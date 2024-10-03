import React from "react";
import "../index.css";
import partner1 from "../assets/microsoft.webp";
import partner2 from "../assets/google.webp";

const Partners = () => {
  const partners = [
    {
      id: 1,
      title: "Microsoft",
      image: partner1,
    },
    {
      id: 2,
      title: "Google",
      image: partner2,
    },
    {
      id: 3,
      title: "Microsoft",
      image: partner1,
    },
    {
      id: 4,
      title: "Google",
      image: partner2,
    },
    {
      id: 5,
      title: "Microsoft",
      image: partner1,
    },
    {
      id: 6,
      title: "Google",
      image: partner2,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-10 bg-white py-[80px] max-md:pt-[0px]">
      <h2 className="text-[36px] font-bold gradient-text mb-[40px]">
        ✦ Eco Systems
      </h2>

      <div className="slider">
        <div className="slider-track gap-[100px]">
          {partners.concat(partners).map((partner, index) => (
            <img
              key={index}
              src={partner.image}
              alt={partner.title}
              className="partner-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
