"use client"

import { useState, useEffect } from "react";
import Form from "./components/Form";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Trigger when background image is fully loaded
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    // Optionally, add more logic here if needed to track when image loading starts
  }, []);

  return (
    <>
      {/* Background Image Section */}
      <div 
        className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? 'bg-loaded' : 'bg-loading'}`}
        style={{ backgroundImage: "url('/1.jpg')" }}
        onLoad={handleImageLoad} // Trigger when image is loaded
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 animate-fadeIn"></div>
        
        {/* Content Container */}
        <div className="relative max-w-screen-lg mx-auto px-0 md:px-6 lg:px-8 py-6">
          <div className="mt-0 max-w-[40rem] ml-10 mr-10 lg:ml-40 bg-white bg-opacity-90 rounded-lg shadow-lg p-5 px-4 lg:px-8">
            {/* Logo */}
            <div className="flex justify-center mb-4 mr-10">
              {/* <img
                src="/logo-1.webp"
                alt="Logo"
                className="h-16 w-16  " // Add animation to logo
              /> */}
              {/* <img
                src="/logo-2.webp"
                alt="Logo"
                className="h-16 w-28" // Slight delay for staggered effect
              /> */}
            </div>

            <h1 className="uppercase text-[1.70rem] text-center font-semibold font-serif animate-slideInDown">
              Get Free Assessment

            </h1>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
