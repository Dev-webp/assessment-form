"use client";

import { useState } from "react";
import Footer from "./components/Footer";
// import Header from "./components/Header"; 
// import Form from "./components/Form"; 
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection"; 

// import TextComponent from "./components/TextComponent"; 
// import Achievements from "./components/Achievements"; 
import ReviewSlider from "./components/ReviewSlider";
// import ContactCTA from "./components/ContactCTA"; 
// import WhyChooseUs from "./components/WhyChooseUs"; 
import FloatingWhatsApp from "./components/FloatingWhatsApp";
// import MigrateToYourDreamCountry from "./components/MigrateToYourDreamCountry"; 

import "./components/styles.css"; // Importing the styles.css file

const ContactPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      {/* <Header />  */}
      <div style={{fontFamily:'Times new roman'}}>

      
      
      

     
      <HeroSection />  
      {/* <TextComponent /> */}
      {/* <div className="flex justify-center my-4">
  <div className="w-[900px] h-[2px] bg-gradient-to-r from-orange-500 to-orange-300"></div>
</div> */}

        
     

  
{/* <Form />  */}
{/* <WhyChooseUs />  */}
{/* <ContactCTA />  */}



  {/* <div className="flex justify-center my-4 mt-12">
  <div className="w-[900px] h-[2px] bg-gradient-to-r from-orange-500 to-orange-300"></div>
</div> */}



     

        {/* Components */}
        
        
        <FloatingWhatsApp />
        {/* <Achievements />  */}
        <FAQ />
        {/* <MigrateToYourDreamCountry />  */}
        <ReviewSlider />
       
        
       

      <Footer />
      </div>
    </>
  );
};

export default ContactPage;
