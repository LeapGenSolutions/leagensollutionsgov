import React from "react";
import CommitmentIcon from "../assets/partners/commitment.svg";
import EmpoweringIcon from "../assets/partners/empowering.svg";
import GlobalIcon from "../assets/partners/personalised.svg";
import ArrowIcon from "../assets/partners/down_arrow.png";
import MicrosoftLogo from "../assets/partners/microsoft.svg";
import SaleforceLogo from "../assets/partners/salesforce.svg";
import GoogleCloudLogo from "../assets/partners/googlecloud.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const UI_PATH_IMAGE = "https://imgs.search.brave.com/JkB0DwbrC-7r7cyY3s5TVcVlNhZhKONAE6eqpfID6fs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91aXBh/dGguY29tL2Nkbi1j/Z2kvaW1hZ2UvZm9y/bWF0PWF1dG8vaHR0/cHM6Ly9pbWFnZXMu/Y3RmYXNzZXRzLm5l/dC81OTY1cHVyeTJs/Y20vMWRTamZ4U1Rl/eUVKalAzRVphbmtn/Vy9kZjY1MDE4MzY5/YTJiY2E1Y2NjNDEy/YWU1YjMzODI3OS9V/aVBhdGgtUmVnLUxv/Z28tV2hpdGUuc3Zn"
const DATABRICKS_IMAGE = "https://imgs.search.brave.com/bRizL964MLecxNlEvo4WhHpHc3wMyxdgJyl-5NQBhII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmM3MTlkNGI0NGJl/MTk2MTU1NGE2ZGYu/cG5n"
const CARASOFT_IMAGE = "https://imgs.search.brave.com/0rna609TzYvpqIUMpFoc0Y7sRHeZ7aeVVeYD0VcUxRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmFja3RvcHN5c3Rl/bXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzExL3do/aXRlLXRyYW5zcGFy/ZW50LWNhcmFoc29m/dC1sb2dvLnBuZw"

function PartnersPage() {
  return (
    <>
      <Header from="details" />
      <div className="bg-gray-900 text-white font-sans">
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, #0e1629 100%)`,
          }}
        >
          {/* Header Section */}
          <header className="pt-[120px] pb-[72px] px-[30px] bg-cover bg-center">
            <h1 className="text-[140px] leading-[0.9] text-left font-bold uppercase mb-2 max-md:text-[50px]">
              The Partner You Can Count On
            </h1>
            <p className="text-lg mb-12">
              Through strategic alliances, LeapGen AI shapes the future.
            </p>
            <img src={ArrowIcon} alt="Arrow Icon" className="mx-auto mb-4" />
          </header>

          <div className="flex flex-col items-center py-[72px] px-[30px]">
            <p className="text-[20px] mb-6 font-semibold text-center">
              Innovating Together for a Connected Future
            </p>
            <p className="text-[18px] text-center">
              At LeapGen AI, partnerships define our approach to technology and
              innovation. By collaborating with industry leaders and technology
              pioneers, we unlock new opportunities and drive transformative
              solutions. These strategic alliances enhance our project delivery
              efficiency by 40% and have boosted client satisfaction by 25%
              annually.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center mx-[22.5px] p-[30px] hover:bg-[#007bff] transition-colors">
                <img
                  src={CommitmentIcon}
                  alt="Commitment Icon"
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold mb-2 text-[22px]">
                  A Commitment to Growth and Mutual Success
                </h3>
                <p className="text-[18px]">
                  Our partnerships amplify our capabilities, merging LeapGen AI’s
                  industry insights with cutting-edge technologies from our
                  partners. This synergy has not only provided our clients with
                  impactful advancements but also resulted in the launch of 3
                  innovative products this year.
                </p>
              </div>
              <div className="flex flex-col items-center text-center mx-[22.5px] p-[30px] hover:bg-[#007bff] transition-colors">
                <img
                  src={EmpoweringIcon}
                  alt="Empowering Icon"
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold mb-2 text-[22px]">
                  Empowering Through Innovation
                </h3>
                <p className="text-[18px]">
                  Each collaboration is a chance to innovate. We combine LeapGen AI
                  digital transformation expertise with our partners’
                  technologies to create impactful solutions, significantly
                  advancing AI, cloud computing, and cybersecurity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center mx-[22.5px] p-[30px] hover:bg-[#007bff] transition-colors">
                <img
                  src={GlobalIcon}
                  alt="Global Icon"
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold mb-2 text-[22px]">
                  Global Reach, Personalized Impact
                </h3>
                <p className="text-[18px]">
                  Our global partnerships address unique client challenges
                  worldwide, enhancing our project management across continents
                  and boosting market penetration by 33% in emerging markets
                  this year.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partners Section */}
        <section
          className="bg-gray-800 py-16 px-6"
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(20,20,20,.35) 0%,rgba(255,255,255,0) 100%)`,
          }}
          // style={{
          //   backgroundImage: `linear-gradient(180deg,rgba(20,20,20,.35) 0%,rgba(255,255,255,0) 100%)`,
          // }}
        >
          <h2 className="text-[99px] leading-[0.9] text-left font-bold uppercase mb-2 max-md:text-[50px]">
            Strategic Partners
          </h2>
          <p className="text-[18px] my-12">
            Explore our Strategic Partners section to learn how we collaborate
            with industry leaders like AWS, Microsoft, Google Cloud, Salesforce,
            and ServiceNow to deliver cutting-edge solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-[40px] mx-[11px] hover:bg-[#007bff] transition-colors bg-[#0e1629]">
              <img
                src={MicrosoftLogo}
                alt="Microsoft Logo"
                className="mx-auto mb-4"
              />
              <p className="text-sm text-center">
                Integrating Azure and Microsoft 365 for advanced cloud, AI, and
                security solutions, delivering transformative industry
                standards.
              </p>
              <Link
                to={`/partners/microsoft`}
                className="block text-center text-blue-400 mt-4"
              >
                Learn More
              </Link>
            </div>
            <div className="p-[40px] mx-[11px] hover:bg-[#007bff] transition-colors bg-[#0e1629]">
              <img
                src={SaleforceLogo}
                alt="Salesforce Logo"
                className="mx-auto mb-4"
              />
              <p className="text-sm text-center">
                Empowering organizations to forge stronger customer
                relationships through innovative CRM and marketing automation.
              </p>
            </div>
            <div className="p-[40px] mx-[11px] hover:bg-[#007bff] transition-colors bg-[#0e1629]">
              <img
                src={GoogleCloudLogo}
                alt="Google Cloud Logo"
                className="mx-auto mb-4"
              />
              <p className="text-sm text-center">
                Harnessing AI and data analytics to create pioneering solutions
                that optimize and innovate, driving digital transformation.
              </p>
            </div>
            <div className="p-[40px] mx-[11px] hover:bg-[#007bff] transition-colors bg-[#0e1629]">
              <img
                src={UI_PATH_IMAGE}
                alt="UI Path Logo"
                className="mx-auto mb-4"
              />
              <p className="text-sm text-center">
                LeapGen AI is a certified UiPath partner.
                LeapGen AI leverages UiPath’s solution to empower customers in creating fully automated enterprises with the most robust, highly rated, and widely adopted Robotic Process Automation (RPA) platform on the market.
              </p>
            </div>
            <div className="p-[40px] mx-[11px] hover:bg-[#007bff] transition-colors bg-[#0e1629]">
              <img
                src={CARASOFT_IMAGE}
                alt="CARASOFT Logo"
                className="mx-auto mb-4"
              />
              <p className="text-sm text-center">
                As a reseller partner for Carahsoft, LeapGen AI collaborates closely with Carahsoft’s channel partner onboarding team, dedicated to enhancing your organization’s sales and marketing success on behalf of the manufacturers we represent. Our partnership with Carahsoft focuses on our mission to help vendors create new opportunities and boost sales across various markets, including the U.S. Federal government, state and local government agencies, higher education institutions, enterprise healthcare, and more.
              </p>
            </div>
            <div className="p-[40px] mx-[11px] hover:bg-[#007bff] transition-colors bg-[#0e1629]">
              <img
                src={DATABRICKS_IMAGE}
                alt="Databricks Logo"
                className="mx-auto mb-4"
              />
              <p className="text-sm text-center">
                As a technology partner for Databricks, LeapGen AI integrates and promotes the top data and AI products available. We offer our partners the technical expertise and go-to-market support necessary to attract new customers and drive business growth
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PartnersPage;
