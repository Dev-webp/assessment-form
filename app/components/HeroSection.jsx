import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import Form from "./Form";
import WhyChooseUs from "./WhyChooseUs";

const HeroSection = () => {
  return (
    <>
      <header className="relative w-full bg-orange-300 h-[400px]">
        {/* Logo */}
        <div className="flex items-center ml-4 sm:ml-10 lg:ml-14 mt-1 pb-1">
          <img
            src="/Final Logo.png"
            alt="Logo"
            className="h-16 w-12 md:h-12 md:w-14 lg:h-16 lg:w-20"
          />
        </div>

        {/* Contact Info */}
        <div className="absolute top-4 right-4 text-black flex flex-col text-sm sm:text-base">
          <a href="tel:+919160449000" className="flex items-center space-x-2">
            <FaPhoneVolume className="text-blue-600 animate-ring mr-1" />
            <span>: +91 9160449000</span>
          </a>
          <a href="mailto:info@vjcoverseas.com" className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-600 animate-pulse mr-1" />
            <span>info@vjcoverseas.com</span>
          </a>
        </div>

        {/* Form Container - Move it higher and keep height fixed */}
        <div className="absolute top-[80%] sm:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-slate-500 w-full max-w-[900px] h-[400px] flex justify-center items-center shadow-lg rounded-lg p-4">
          <div className="w-full flex justify-center pb-28">
            <Form />
          </div>
        </div>
      </header>
      <div className="mt-44">
        <WhyChooseUs />
      </div>
    </>
  );
};

export default HeroSection;
