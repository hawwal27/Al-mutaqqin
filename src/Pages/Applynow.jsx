import React, { useState } from "react";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className=" bg-gradient-to-r from-green-50 to-white max-w-4xl mx-auto p-6">
  {/* Breadcrumb */}
  <div className="mb-4">
    <Link to="/" className="text-green  -600 hover:underline flex items-center space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span>Back to Home</span>
    </Link>
  </div>
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Darul-muttaqqin Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Student Information */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
          <input name="studentName" onChange={handleChange} placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <input name="dob" onChange={handleChange} type="date" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <select name="gender" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl mb-4">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input name="nationality" onChange={handleChange} placeholder="Nationality" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <input name="placeOfBirth" onChange={handleChange} placeholder="Place of Birth" className="w-full p-3 border border-gray-300 rounded-xl" />
        </div>

        {/* Parent/Guardian Info */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Parent/Guardian Information</h2>
          <input name="parentName" onChange={handleChange} placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <input name="relationship" onChange={handleChange} placeholder="Relationship to Student" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <input name="phone" onChange={handleChange} placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <input name="email" onChange={handleChange} placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <input name="address" onChange={handleChange} placeholder="Home Address" className="w-full p-3 border border-gray-300 rounded-xl" />
        </div>

        {/* Islamic Background */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Islamic Background</h2>
          <select name="isMuslim" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl mb-4">
            <option value="">Is the student from a Muslim household?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <select name="prayer" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl mb-4">
            <option value="">Does the student pray 5 times a day?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Sometimes">Sometimes</option>
          </select>
          <input name="quranMemorized" onChange={handleChange} placeholder="How much Qur'an memorized?" className="w-full p-3 border border-gray-300 rounded-xl mb-4" />
          <select name="canReadArabic" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-xl">
            <option value="">Can the student read Arabic?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Agreements */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Agreements</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="agreeRules" onChange={handleChange} />
              <span>I agree to follow all school rules.</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="supportIslamicEnv" onChange={handleChange} />
              <span>I agree to support the Islamic environment.</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="confirmInfo" onChange={handleChange} />
              <span>I confirm all information provided is accurate.</span>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white text-lg py-3 rounded-xl hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
};

export default ApplyNow;
