import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CoreValues from "./CoreValues";
import Plans from "./Plans";
import SuccessStories from "./SuccessStories";
import Partners from "./Partners";
import ConnectWithUs from "./ConnectWithUs";
import CoreComponents from "./CoreComponents";
import Leapgenai from "./Leapgenai";
import AdditionalInfo from "./AdditionalInfo";

const Home = (props) => {
  const heroRef = useRef(null);
  const leapgenRef = useRef(null);
  const coreRef = useRef(null);
  const compRef = useRef(null);
  const successRef = useRef(null);
  const plansRef = useRef(null);
  const connectRef = useRef(null);

  function handleMenuClick(menuItem) {
    if (menuItem === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "leapgen") {
      leapgenRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "core") {
      coreRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "comp") {
      compRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "success") {
      successRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "plans") {
      plansRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "connect") {
      connectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    if (props.loadHistory === true) {
      window.scrollTo({
        top: 1300,
        left: 0,
        behavior: "smooth",
      });
      props.setloadHistory(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loadHistory]);

  return (
    <div className="bg-white">
      <Header handleMenuClick={handleMenuClick} />
      <div ref={heroRef}>
        <Hero ref={heroRef} />
      </div>
      <div ref={leapgenRef}>
        <Leapgenai ref={leapgenRef} />
      </div>
      {/* <PublicServices /> */}
      <div ref={coreRef}>
        <CoreValues ref={coreRef} />
      </div>
      <div ref={compRef}>
        <CoreComponents ref={compRef} />
      </div>
      <div ref={successRef}>
        <SuccessStories ref={successRef} />
      </div>
      <div ref={plansRef}>
        <Plans ref={plansRef} />
      </div>
      <Partners />
      <div ref={connectRef}>
        <ConnectWithUs ref={connectRef} />
      </div>
      <AdditionalInfo />
      <Footer handleMenuClick={handleMenuClick} />
    </div>
  );
};

export default Home;
