import { Link } from 'react-router-dom';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Right: Image Gallery */}
        <div className="w-full lg:w-1/2 relative h-auto flex flex-col items-center justify-center">

          {/* ✅ Mobile View: Two images side-by-side */}
          <div className="flex gap-4 lg:hidden">
            <img
              src="https://media.istockphoto.com/id/1924378252/photo/empty-classroom-with-chairs-and-desks.webp?a=1&b=1&s=612x612&w=0&k=20&c=L4vBzZgWbezFcYTAsejB9lDsnwo2DaA0uIDNIu232B4="
              alt="Mobile Image 1"
              className="w-1/2 h-40 object-cover rounded-xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Mobile Image 2"
              className="w-1/2 h-40 object-cover rounded-xl shadow-md"
            />
              <img
              src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Mobile Image 2"
              className="w-1/2 h-40 object-cover rounded-xl shadow-md"
            />
              <img
              src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Mobile Image 2"
              className="w-1/2 h-40 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* ✅ Desktop View: Original stacked layout */}
          <div className="hidden lg:flex flex-row items-end justify-center gap-8 px-4 h-[600px]">
            {/* Image Stack 1 */}
            <div className="relative flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1924378252/photo/empty-classroom-with-chairs-and-desks.webp?a=1&b=1&s=612x612&w=0&k=20&c=L4vBzZgWbezFcYTAsejB9lDsnwo2DaA0uIDNIu232B4="
                alt="Bottom Image 1"
                className="w-48 h-64 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://img.freepik.com/premium-photo/school-building-is-green-friends-with-green-grass_934343-747.jpg?ga=GA1.1.2055712349.1748864099&semt=ais_hybrid&w=740"
                alt="Top Image 1"
                className="w-48 h-64 object-cover rounded-xl shadow-md absolute bottom-full left-[80px]"
              />
            </div>

            {/* Image Stack 2 */}
            <div className="relative flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1611941671018-6c3907cb7a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Bottom Image 2"
                className="w-48 h-64 o;bject-cover rounded-xl shadow-md"
              />
              <img
                src="https://media.istockphoto.com/id/1957203772/photo/primary-school-and-pupils-in-classroom-elementary-students-doing-exam-and-being-supervised-by.jpg?s=612x612&w=0&k=20&c=ETLJNLkPeAT0ycKxBrjN4kQFFbMv35rAT28tjVxlEuI="
                alt="Top Image 2"
                className="w-48 h-64 object-cover rounded-xl shadow-md absolute bottom-full left-[80px]"
              />
            </div>
          </div>
        </div>

        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 leading-tight mb-6">
            Welcome to <span className="text-green-600">Darul</span> muttaqqin
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Empowering young minds through excellence in education, faith, and character development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/Applynow"
              className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition text-center"
            >
              Apply Now
            </Link>
            <Link
              to="/Learnmore"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
