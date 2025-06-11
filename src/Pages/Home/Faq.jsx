import React, { use, useEffect, useState } from 'react';
import faqLoiite from '../../assets/Lotties/Faq.json';
import Lottie from 'lottie-react';
import { Fade } from 'react-awesome-reveal';
import useIsMobile from '../../Hooks/isMobile';
import { i } from 'motion/react-client';
const Faq = () => {
  const faqs = [
    {
      question: 'What is Eduloop Study?',
      answer:
        'Eduloop is a group study platform where you can create, submit, and review assignments with your peers.',
    },
    {
      question: 'How do I submit an assignment?',
      answer:
        "After logging in, go to any assignment's detail page and click the “Take Assignment” button to submit via a Google Docs link and notes.",
    },
    {
      question: 'Can I grade my own assignments?',
      answer:
        'No, users are only allowed to grade assignments submitted by others.',
    },
    {
      question: 'Is the site mobile friendly?',
      answer:
        'Yes! The site is fully responsive and optimized for all devices.',
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const isMobile = useIsMobile();
 const [duration, setDuration] = useState(0);
 useEffect(() => {
   if (!isMobile) {
     setDuration(1000);
   }
   
 }, [isMobile]);
 console.log(duration);
  return (
    <Fade triggerOnce={isMobile} direction="up" duration={duration}>
      <div className=" dark:bg-[#213047] max-w-[90%] mx-auto flex flex-col md:flex-row-reverse items-center mt-8 rounded-2xl shadow-2xl">
        <div className="flex-1">
          <Lottie
            style={{ width: '300px', height: '300px' }}
            animationData={faqLoiite}
            loop={true}
          ></Lottie>
        </div>
        <div className="flex-1">
          <div className="my-16 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="dark:bg-[#213047]  p-4 rounded-lg shadow cursor-pointer select-none"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-semibold text-lg flex justify-between items-center">
                    {faq.question}
                    <span className="ml-2 text-xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </h3>
                  {openIndex === index && (
                    <p className="bg-[#9d91ad] mt-2 text-sm text-gray-600 rounded-2xl p-5">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Faq;
