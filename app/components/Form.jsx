import React, { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // States for MCQ answers and form navigation
  const [currentStep, setCurrentStep] = useState(0);
  const [mcqAnswers, setMcqAnswers] = useState(Array(5).fill('')); // Store answers for 5 questions

  const mcqQuestions = [
    { question: 'What is your preferred study destination?', options: ['USA', 'UK', 'Canada', 'Australia'] },
    { question: 'How long are you planning to study?', options: ['Less than 1 year', '1-2 years', '3+ years'] },
    { question: 'Do you need scholarship assistance?', options: ['Yes', 'No'] },
    { question: 'What is your field of interest?', options: ['Engineering', 'Medicine', 'Business', 'Art'] },
    { question: 'Have you already started your application?', options: ['Yes', 'No'] },
  ];

  // Handle MCQ answer change
  const handleMcqChange = (index, answer) => {
    const updatedAnswers = [...mcqAnswers];
    updatedAnswers[index] = answer;
    setMcqAnswers(updatedAnswers);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      age,
      message,
      mcqAnswers, // Include MCQ answers with the form data
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send form data including MCQ answers
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setMessage('');
        setMcqAnswers(Array(5).fill('')); // Reset MCQ answers
        setPopupVisible(true);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setFormStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // Close the success popup after 4 seconds
  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => {
        setPopupVisible(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [popupVisible]);

  // Next and Previous Step Handlers
  const handleNext = () => {
    if (mcqAnswers[currentStep]) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Heading for the form */}
      <h2 className="text-2xl font-bold text-orange-600"  >Get <span style={{color:'black'}}>Free</span> Assessment </h2>
  
      <div className="w-95 h-auto p-4 rounded-lg">
        {currentStep < mcqQuestions.length ? (
          // MCQ Step
          <div className="space-y-4 lg:space-y-4 mt-4 lg:mt-4">
            <div>
              <h3 className="text-xl font-semibold">{mcqQuestions[currentStep].question}</h3>
              <div className="flex space-x-4 mt-2">
                {mcqQuestions[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleMcqChange(currentStep, option)}
                    className={`px-4 py-2 border rounded-lg shadow-sm ${
                      mcqAnswers[currentStep] === option ? 'bg-gray-400 text-white' : 'bg-white text-black'
                    } focus:outline-none`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
  
            <div className="flex justify-between mt-4">
              {currentStep > 0 && (
                <button
                  type="button"
                  className="bg-gray-600 text-white py-2 px-6 rounded-lg w-15 hover:bg-gray-500"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              <button
                type="button"
                className="bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-black"
                onClick={handleNext}
                disabled={!mcqAnswers[currentStep]} // Disable next button if no answer is selected
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          // Form Step
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-4 mt-4 lg:mt-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
  
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="age" className="sr-only">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Your Age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
  
              <div className="flex-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
  
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-500"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-56 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-black"
                disabled={loading}
              >
                {formStatus === 'success' ? 'Form Submitted!' : loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
  
        {/* Success Popup */}
        {popupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
              <p className="text-xl font-semibold">Submission received, we’ll get back to you shortly!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
