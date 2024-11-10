import React, { useEffect } from "react";
import ArrowIcon from "../assets/partners/down_arrow.png";
import GreenLineIcon from "../assets/partners/green_line.svg";
import GreenLine2Icon from "../assets/partners/green_line2.png";
import JointSolutuons from "../assets/partners/joint_solutions.jpg";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import MicrosoftIMG from "../assets/partners/microsoft_inner.jpg";

function LearnMorePage() {
  const { id } = useParams();

  const slides = [
    {
      id: 2,
      title: "Driving Digital Excellence with LeapGen AI & Microsoft",
      image: MicrosoftIMG,
      description:
        "Achieving Digital Excellence with LeapGen AI and Microsoft. Transforming Industries with Tailored Microsoft Solutions for Success. Leapgen AI harnesses Microsoft’s advanced solutions to revolutionize businesses, fostering innovation and efficiency. Together, we create customized digital experiences that set new industry standards and deliver outstanding results.",
      points: [
        {
          name: "50+",
          desc: "Microsoft certifications held by our team",
        },
        {
          name: "3",
          desc: "Azure-based mobile and cloud-native apps developed",
        },
        {
          name: "200%",
          desc: "increase in Art Basel's page views with Microsoft Azure",
        },
        {
          name: "500+",
          desc: "user stories managed annually with Microsoft Dynamics",
        },
        {
          name: "99.9%",
          desc: "uptime for critical systems, surpassing the 99.5% target",
        },
      ],
      joint_solutions: `At LeapGen AI, we leverage the comprehensive capabilities of Microsoft technologies to empower your digital transformation journey. Our partnership with Microsoft enables us to offer a diverse range of solutions from strategic cloud adoption to complete digital overhaul, all designed to meet the critical needs of modern businesses in a rapidly evolving digital world. Below, explore our curated suite of Microsoft solutions that are structured to enhance your operational efficiency, fortify your data security, and accelerate your business growth with pioneering technology.`,
      path: "microsoft",
    }
  ];

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <>
      <Header from="details" />

      <div className="bg-gray-900 text-white font-sans">
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, #0e1629 100%)`
          }}
        >
          {/* Header Section */}
          <header className="pt-[120px] pb-[72px] px-[30px] bg-cover bg-center w-1/2 max-md:w-full">
            <h1 className="text-[100px] leading-[0.9] text-left font-bold uppercase mb-2 max-md:text-[45px]">
              {slides.filter((data) => data.path === id)[0].title}
            </h1>
            <p className="text-lg mb-12 mt-[40px]">
              {slides.filter((data) => data.path === id)[0].description}
            </p>
          </header>

          <img src={ArrowIcon} alt="Arrow Icon" className="mx-auto mb-4" />
          <img src={GreenLineIcon} alt="Arrow Icon" className="mx-auto mb-4" />

          <div className="flex flex-row flex-wrap gap-[20px] items-center py-[72px] px-[30px]">
            {slides
              .filter((data) => data.path === id)[0]
              .points.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundImage: `url('https://dminc.com/wp-content/uploads/2024/07/GRID_4_Seamless_1.png')`,
                    }}
                    className="flex flex-col items-center justify-center text-center flex-1 self-stretch px-[30px] py-[40px] bg-[#004b85]"
                  >
                    <h3 className="font-bold mb-2 text-[48px]">{item.name}</h3>
                    <div className="h-[3px] w-[80px] bg-[#11cc6e]" />
                    <p className="text-[18px] mt-4">{item.desc}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <img src={GreenLine2Icon} alt="Arrow Icon" className="mx-auto mb-4" />

        <section className="bg-[#0e1629] text-white py-16 px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-[94px] leading-[0.9] text-left font-bold uppercase mb-2 max-md:text-[40px]">
                Joint Solutions
              </h2>
              <p className="text-lg leading-relaxed mt-12">
                {slides.filter((data) => data.path === id)[0].joint_solutions}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={JointSolutuons}
                alt="Joint Solutions"
                className="rounded-md w-full h-auto lg:max-w-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LearnMorePage;
