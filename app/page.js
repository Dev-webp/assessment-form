"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer"; 
import Header from "./components/Header";
import Form from "./components/Form";
import TextComponent from "./components/TextComponent";
import Achievements from "./components/Achievements";
import ReviewSlider from "./components/ReviewSlider";
import ContactCTA from "./components/ContactCTA"; 
import WhyChooseUs from "./components/WhyChooseUs";
import MigrateToYourDreamCountry from "./components/MigrateToYourDreamCountry";

import './components/styles.css';  // Importing the styles.css file

const ContactPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { 
      src: "/img1.png", 
      alt: "Contact Us", 
      title: (
        <>
          <div className="text-center mb-9">Welcome to VJC overseas Visas</div>
        </>
      ),
      description: (
        <>
          We're here to guide you to success, We're here to guide you to success.,We're here to guide you to success. <br />
          <div className="text-center">We're here to guide you to success.</div>
          <br />
        </>
      ),
      buttonText: "Apply Today"
    },
    // Other images...
    { 
      src: "/img2.jpg", 
      alt: "Visa Services", 
      title: "Get the best visa solutions.",
      description: "Explore Visa Services", 
      buttonText: "Apply Today" 
    },
    { 
      src: "/img3.avif", 
      alt: "Study Abroad", 
      title: "Study Abroad with Us", 
      description: "Start your journey to global education.", 
      buttonText: "Apply Today" 
    },
    { 
      src: "/img4.jpg", 
      alt: "Career Opportunities", 
      title: "Boost Your Career", 
      description: "Discover the best career opportunities abroad.", 
      buttonText: "Apply Today" 
    },
  ];

  // Change image automatically after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />

      <div className="relative w-full h-auto" style={{fontFamily:'Times New Roman'}}>
        {/* Image with text overlay */}
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-[650px] object-cover"
        />

        {/* Text overlay with animation */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black/50">
          {/* Title */}
          <h1 
            key={`title-${currentImageIndex}`} 
            className={`text-4xl font-bold mb-4 -mt-5 animate-slideFromTop`}
          >
            {images[currentImageIndex].title}
          </h1>

          {/* Description */}
          <p 
            key={`description-${currentImageIndex}`} 
            className={`text-lg mb-6 animate-slideFromLeft`}
          >
            {images[currentImageIndex].description}
          </p>

          {/* Button */}
          <button 
            key={`button-${currentImageIndex}`}
            className="bg-transparent hover:bg-gray-800 text-white py-2 px-6 border-2 border-white hover:text-black transition-all duration-300 animate-button"
          >
            {images[currentImageIndex].buttonText}
          </button>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        >
          &#8594;
        </button>
      </div>

      {/* Responsive container for text and form */}
<div className="mt-12 flex flex-col lg:flex-row lg:justify-between lg:items-start">
  {/* Text component at the top (or left on larger screens) */}
  <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
    <TextComponent />
  </div>

  {/* Form container at the bottom (or right on larger screens) */}
  <div
className="w-full lg:w-2/5 max-w-xl bg-white bg-opacity-50 shadow-2xl p-8 mr-12 h-[515px] rounded-lg"




    style={{ fontFamily: 'Times New Roman' }}
  >
    {/* Heading */}
    <div className="flex items-center justify-center mb-8" style={{marginBottom:'-20px'}}>
  {/* Heading */}
  <h2 className="text-2xl font-bold text-center text-orange-600">Check Your Eligibility</h2>

  {/* Dots beside the heading */}
  <span className="flex space-x-1 ml-4">
    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
  </span>
</div>


    {/* Form component */}
    <Form />
  </div>
</div>
<Achievements />
<MigrateToYourDreamCountry />
<ReviewSlider />

 
<ContactCTA /> 
<WhyChooseUs /> 



      
      <Footer />  
    </>
  );
};

export default ContactPage;
