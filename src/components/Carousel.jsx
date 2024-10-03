import React, { useState } from "react";
import "./Carousel.css";
import CoreComp1 from "../assets/corecomponents/corecomp1.avif";
import CoreComp2 from "../assets/corecomponents/corecomp2.avif";
import CoreComp3 from "../assets/corecomponents/corecomp3.avif";
import CoreComp4 from "../assets/corecomponents/corecomp4.avif";
import CoreComp5 from "../assets/corecomponents/corecomp5.avif";
import Button from "./Button";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Data & AI Solutions",
      image: CoreComp1,
      description:
        "Specializing in artificial intelligence and data analytics, LeapGen Solutions develops tools and strategies to leverage data for business insights, process automation, and decision support systems. This includes their products like Seismic, Octopus, and SurroundAI.",
      path: "Data&Ai",
    },
    {
      id: 2,
      title: "Application Modernization",
      image: CoreComp2,
      description:
        "LeapGen Solutions provides services to modernize and migrate legacy systems to newer, more efficient platforms. This includes updating software applications to be more scalable, secure, and capable of integrating with modern technologies.",
      path: "Application Modernization",
    },
    {
      id: 3,
      title: "Migration Services",
      image: CoreComp3,
      description:
        "Expertise in migrating data and systems from on-premises infrastructure to cloud platforms. This helps businesses increase their operational efficiency, reduce costs, and leverage the scalability of cloud computing.",
      path: "Migration Services",
    },
    {
      id: 4,
      title: "ERPC & CRM Solutions",
      image: CoreComp4,
      description:
        "Offering robust Enterprise Resource Planning and Customer Relationship Management solutions that help streamline business operations and enhance customer relationships through better data management and analytics.",
      path: "ERPC&CRM",
    },
    {
      id: 5,
      title: "Staff Augmentation",
      image: CoreComp5,
      description:
        "Providing skilled professionals to augment a client's existing staff, enabling them to efficiently scale operations or manage projects without the overhead of permanent hires.",
      path: "StaffAugmentation",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <ul
        className="carousel__track"
        style={{ transform: `translateX(-${currentIndex * 40}%)` }}
      >
        {slides.map((slide) => (
          <li key={slide.id} className="carousel__slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel__image"
            />
            <p className="carousel__title">{slide.title}</p>
            <div className="carousel__overlay">
              <p className="mt-[120px] mb-[10px] mx-[20px] text-white text-[12px] text-center">
                {slide.description}
              </p>
              <Link to={`/${slide.path}`}>
                <Button text="View Details" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="carousel__controls">
        <button
          onClick={() => currentIndex !== 0 && prevSlide()}
          className="carousel__control carousel__control--prev"
          style={{
            backgroundColor: currentIndex === 0 && "transparent",
            marginLeft: "1rem",
          }}
        >
          {currentIndex !== 0 && <i class="fa fa-angle-left"></i>}
        </button>
        <button
          onClick={() => currentIndex === 0 && nextSlide()}
          className="carousel__control carousel__control--next"
          style={{
            backgroundColor: currentIndex !== 0 && "transparent",
            marginRight: "1rem",
          }}
        >
          {currentIndex === 0 && <i class="fa fa-angle-right"></i>}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
