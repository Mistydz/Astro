"use client"
import React, { useState } from 'react';

const FaqPage = () => {
  const faqData = [
    {
      question: 'What is Steam?',
      answer: 'Steam is a video game digital distribution service and storefront developed by Valve Corporation.',
    },
    {
      question: 'What is Steam Astro?',
      answer: 'Steam Astro is a platform that help you know the cost of leveling up your steam account.',
    },
    {
      question: 'How can i use the platform?',
      answer: 'Step 1: Get your Steam Username or your ID64 and paste it in the first input example "misty" or "76561199125082251" ; Step 2: Enter the level you want to reach and press calculate. ;Step 3: You can see the cost of your level up in terms of Team Fortress 2 Keys (cheapest way to rank up). 1 key = $2.5 and you can trade 1 key for 20 sets on trading bots (you can find them by googling "steam cards tf2 keys").',
    },
    {
        question: 'What is this project for?',
        answer: 'This is just a side project that i wanted to do in my extra time , but you can always check @HibaFreelance to see other things i worked on',
      }
    // Add more questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="p-8">
      <div className="p-8 rounded-md shadow-md max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div>
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 mt-4">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => handleAccordionToggle(index)}
              >
                <span className="font-bold">{item.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="mt-2">
                  {item.answer.split(';').map((line, i) => (
                    <React.Fragment key={i}>
                      {line.trim()}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;