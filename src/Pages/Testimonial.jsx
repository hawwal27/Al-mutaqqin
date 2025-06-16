// components/Testimonials.jsx
import React from 'react';

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
  return (
    <section id="testimonials" className="bg-gray-50 py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-16">
          Voices of Our Community
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-green-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-600 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-green-700">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed italic">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
