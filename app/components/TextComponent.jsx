const TextComponent = () => {
  return (
    <div 
      className="text-lg text-gray-700 space-y-6 mx-6 lg:mx-12 bg-cover bg-center" 
      style={{
        fontFamily: 'Times New Roman', 
         // Replace with your image path
      }}
    >
      {/* Section title */}
      <p className="text-base text-orange-600 font-semibold">About VJC Visas</p>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 leading-snug" style={{marginBottom:'20px'}}>
        What is VJC Overseas Visas?
      </h1>

      {/* Paragraph */}
      <p className="text-base leading-relaxed">
        At VJC Overseas, we understand that making the right choice for your future is crucial.
        That's why we offer expert visa consultancy services to guide you through every step of your journey.
        Whether you're looking to study abroad, secure a work visa, or explore new career opportunities,
        our team is here to provide personalized solutions tailored to your needs. With years of experience,
        we have successfully helped thousands of individuals achieve their dreams.
      </p>

      {/* Call-to-action button */}
      <div className="flex items-center space-x-3">
        {/* Button */}
        <button className="px-6 py-3 bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 transition duration-300">
          Know More
        </button>

        {/* Arrow with dots */}
        <div className="flex items-center text-orange-700">
          <span className="text-4xl">→</span>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
