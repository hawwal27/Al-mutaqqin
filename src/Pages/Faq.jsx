import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'What curriculum does All-Mutaqqin follow?',
    answer:
      'All-Mutaqqin integrates national curriculum standards with strong Islamic studies and Arabic language programs to provide a balanced education.',
  },
  {
    question: 'Do you offer scholarships or financial aid?',
    answer:
      'Yes, we offer scholarships based on academic merit and financial need. Contact the admissions office for more information.',
  },
  {
    question: 'What are the school hours?',
    answer:
      'School hours are Monday to Friday, 8:00 AM to 4:00 PM. Special programs may occur after school or on weekends.',
  },
  {
    question: 'Is there transportation available for students?',
    answer:
      'Yes, we provide transportation services on selected routes. Please check with the front office to see if your area is covered.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-green-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-green-50 hover:bg-green-100 transition font-medium text-gray-800"
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>

              <div
                className={`px-6 pt-0 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
