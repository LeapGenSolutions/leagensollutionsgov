import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PublicServices from "./PublicServices";
import CoreValues from "./CoreValues";
import Plans from "./Plans";
import SuccessStories from "./SuccessStories";
import ConnectWithUs from "./ConnectWithUs";
import CoreComponents from "./CoreComponents";
import Leapgenai from "./Leapgenai";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  const heroRef = useRef(null);
  const leapgenRef = useRef(null);
  const coreRef = useRef(null);
  const compRef = useRef(null);
  const successRef = useRef(null);
  const plansRef = useRef(null);
  const connectRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "hero" && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "leapgen" && leapgenRef.current) {
      leapgenRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "core" && coreRef.current) {
      coreRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "comp" && compRef.current) {
      compRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "plans" && plansRef.current) {
      plansRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "connect" && connectRef.current) {
      connectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

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
      <Header
        handleMenuClick={(menuItem) => (window.location.hash = `#${menuItem}`)}
      />
      <div ref={heroRef}>
        <Hero ref={heroRef} />
      </div>
      <div ref={leapgenRef}>
        <Leapgenai ref={leapgenRef} />
      </div>
      <PublicServices />
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
      <div ref={connectRef}>
        <ConnectWithUs ref={connectRef} />
      </div>
      <Footer
        handleMenuClick={(menuItem) => (window.location.hash = `#${menuItem}`)}
      />
    </div>
  );
};

export default Home;