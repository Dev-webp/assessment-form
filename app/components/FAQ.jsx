import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './styles.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What is the purpose of your visit to the United States?',
      answer: 'The purpose of my visit is to attend a business conference and meet with potential clients.',
    },
    {
      question: 'How long do you plan to stay in the US?',
      answer: 'I plan to stay for two weeks, from March 1st to March 14th.',
    },
    {
      question: 'Do you have relatives or friends currently in the US?',
      answer: 'No, I do not have any relatives or friends residing in the United States.',
    },
    {
      question: 'What is your current occupation?',
      answer: 'I am a software engineer working at XYZ Corporation for the past five years.',
    },
    {
      question: 'Who is sponsoring your trip to the United States?',
      answer: 'My employer, XYZ Corporation, is sponsoring my trip and covering all expenses.',
    },
    {
      question: 'Have you traveled to the US before?',
      answer: 'No, this will be my first trip to the United States.',
    },
    {
        question: 'What is your current occupation?',
        answer: 'I am a software engineer working at XYZ Corporation for the past five years.',
      },
      {
        question: 'Who is sponsoring your trip to the United States?',
        answer: 'My employer, XYZ Corporation, is sponsoring my trip and covering all expenses.',
      },
      {
        question: 'Have you traveled to the US before?',
        answer: 'No, this will be my first trip to the United States.',
      },
      {
        question: 'Who is sponsoring your trip to the United States?',
        answer: 'My employer, XYZ Corporation, is sponsoring my trip and covering all expenses.',
      },
      {
        question: 'Have you traveled to the US before?',
        answer: 'No, this will be my first trip to the United States.',
      },

  ];
  return (
    <div className="w-full mt-20 px-4 text-2xl">
      <h2 className="text-center text-4xl font-bold mb-12">Need Assistance?</h2>
      <div className="flex justify-center items-center mb-12 -m-8">
        <div className="w-20 h-1 bg-orange-600"></div>
        <div className="w-4 h-1 bg-orange-600 mx-2"></div>
        <div className="w-2 h-1 bg-orange-600 mx-1"></div>
      </div>
      <div className="w-full  mx-auto text-2xl">
        {questions.map((item, index) => (
          <div
            key={index}
            className="faq-item border border-orange-500  p-8 mb-4"
          >
            <div
              className="faq-question flex justify-between items-center cursor-pointer ml-6 pt-3 pb-3 box "
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="text-orange-500 mr-3">
                {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer mt-2 text-gray-700 ml-6">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
