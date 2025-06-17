;// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 lg:px-16" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-extrabold text-green-800 mb-6 leading-tight">
            Empowering the Next Generation of Leaders
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            All-Mutaqqin School is committed to blending academic excellence with deep-rooted Islamic values. 
            Our holistic education approach develops the intellect, nurtures the soul, and builds a strong moral foundation.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-700">Balanced Curriculum</h4>
                <p className="text-gray-600">Merging academic knowledge with Islamic teachings for a well-rounded education.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-700">Character Development</h4>
                <p className="text-gray-600">Fostering integrity, kindness, and community responsibility in every student.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-700">Community Engagement</h4>
                <p className="text-gray-600">Promoting parental involvement, collaboration, and service-based learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img 
            src="https://i.pinimg.com/736x/4d/a2/17/4da217df21880a02bdf1bd5f1f0c4583.jpg" 
            alt="About All-Mutaqqin School" 
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
