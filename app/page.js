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
    
  }, []);

  return (
    <>
      {/* Background Image Section */}
      <div 
        className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? 'bg-loaded' : 'bg-loading'}`}
        // style={{ backgroundImage: "url('/1.jpg')" }}
        onLoad={handleImageLoad} 
      >
       
        <div className="absolute inset-0 bg-black/40 animate-fadeIn"></div>
       
        
        <div className="relative max-w-screen-lg mx-auto px-0 md:px-6 lg:px-8 py-6 ">
          
          <div className="mt-0 max-w-[37rem] ml-10 mr-10 lg:ml-40 bg-white bg-opacity-90 p-5 px-4 lg:px-8 rounded-lg mt-10" style={{fontWeight:'bold', fontFamily: 'Times New Roman, Times, serif'}}>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
