"use client";

import { useState, useEffect } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Trigger when image is fully loaded
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />

      <div className="relative max-w-screen-lg mx-auto px-0 md:px-6 lg:px-8 py-6">
        <div
          className="mt-20 flex flex-col lg:flex-row items-stretch bg-white shadow-lg rounded-lg overflow-hidden"
          style={{
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          {/* Left Half: Image */}
          <div className="flex-1 relative hidden lg:block">
            <img
              src="/2.webp"
              alt="Contact Page Visual"
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
            />
          </div>

          {/* Right Half: Form */}
          <div className="flex-1 p-5 lg:p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Get in Touch
            </h2>
            <Form />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
