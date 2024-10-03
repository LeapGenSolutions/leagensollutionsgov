import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoreComp1 from "../assets/corecomponents/corecomp1.avif";
import CoreComp2 from "../assets/corecomponents/corecomp2.avif";
import CoreComp3 from "../assets/corecomponents/corecomp3.avif";
import CoreComp4 from "../assets/corecomponents/corecomp4.avif";
import CoreComp5 from "../assets/corecomponents/corecomp5.avif";
import Header from "./Header";
import Footer from "./Footer";

function FeatureDetails(props) {
  const { id } = useParams();

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    props.setloadHistory(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full bg-white">
      <Header from="details" />
      <div className="flex flex-row w-full bg-white p-12 flex-wrap max-md:p-6">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-[50px] text-[#333333] font-bold text-left w-1/2 max-md:w-full max-md:text-[30px]">
            {slides.filter((data) => data.path === id)[0].title}
          </h1>
          <p className="text-base description max-md:text-[16px] my-[20px] w-1/2 max-md:w-full">
            {slides.filter((data) => data.path === id)[0].description}
          </p>
        </div>
        <div className="flex-1 flex justify-end min-w-[250px]">
          <img
            className="w-[500px] h-[500px] rounded-[30px] object-cover"
            src={slides.filter((data) => data.path === id)[0].image} alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FeatureDetails;
