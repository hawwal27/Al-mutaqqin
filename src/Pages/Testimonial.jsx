import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aisha Mohammed',
    role: 'Parent of Grade 6 Student',
    quote:
      'All-Mutaqqin has transformed my child’s education. The teachers are truly dedicated, and the Islamic values are instilled beautifully.',
    image: '/people/aisha.jpg',
  },
  {
    name: 'Ustadh Hamza Yusuf',
    role: 'Guest Lecturer',
    quote:
      'I was impressed by the level of student engagement and the school’s balanced focus on academics and character development.',
    image: '/people/hamza.jpg',
  },
  {
    name: 'Fatima Sulaiman',
    role: 'Alumni',
    quote:
      'Studying at All-Mutaqqin gave me strong foundations in both deen and dunya. I’m proud to be a graduate of this amazing school!',
    image: '/people/fatima.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleUp = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleDown = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl font-extrabold text-green-800 mb-12">
          Voices of Our Community
        </h2>

        {/* Up Arrow */}
        <button
          onClick={handleUp}
          className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-white border border-green-300 p-2 rounded-full shadow hover:scale-110 transition"
        >
          <FaChevronUp className="text-green-700" />
        </button>

        {/* Slide container */}
        <div className="relative h-[320px] overflow-hidden">
          <div
            className="flex flex-col transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 320}px)` }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center h-[320px] px-6"
              >
                <FaQuoteLeft className="text-4xl text-green-300 mb-4" />
                <p className="text-lg text-gray-700 italic mb-6 max-w-xl mx-auto">
                  “{t.quote}”
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-600"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-green-700">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Down Arrow */}
        <button
          onClick={handleDown}
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-white border border-green-300 p-2 rounded-full shadow hover:scale-110 transition"
        >
          <FaChevronDown className="text-green-700" />
        </button>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-green-700 scale-110' : 'bg-green-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
