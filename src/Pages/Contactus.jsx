import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-4">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-16">
          We'd love to hear from you! Reach out with questions, feedback, or inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-1">📍 School Address</h3>
              <p className="text-gray-700">123 Learning Lane, Knowledge City, Education State, 45678</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-1">📧 Email</h3>
              <p className="text-gray-700">info@allmutaqqin.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-1">📞 Phone</h3>
              <p className="text-gray-700">+ (234) 567-8901</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-1">🕓 Office Hours</h3>
              <p className="text-gray-700">Mon - Fri: 8:00 AM – 4:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-green-50 rounded-2xl p-8 shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
