import React from 'react'
import {Link} from "react-router-dom"
const Learnmore = () => {
  return (
     <div className=" bg-gradient-to-r from-green-50 to-white max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link to="/" className="text-green-600 hover:underline">← Back to Home</Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6">About Our Muslim School</h1>

      <div className="space-y-6 text-lg text-gray-700">
        <p>
          Our school is dedicated to providing a balanced education that integrates academic excellence with a deep understanding of Islamic values. We believe in nurturing the whole child — intellectually, spiritually, and socially.
        </p>

        <p>
          Students at our school benefit from:
          <ul className="list-disc list-inside mt-2">
            <li>Qualified and caring Muslim educators</li>
            <li>Daily Islamic studies and Qur'an recitation</li>
            <li>A supportive and inclusive Islamic environment</li>
            <li>Modern facilities for science, technology, and the arts</li>
            <li>Small class sizes for individualized attention</li>
            <li>Extra-curricular activities and community service projects</li>
          </ul>
        </p>

        <p>
          Our curriculum combines national academic standards with Islamic teachings. We emphasize character development (akhlaq), manners (adab), and a strong Islamic identity. Students graduate with a strong foundation to succeed in both this life and the hereafter.
        </p>

        <p>
          Admission is open to students aged 4 and above. We conduct assessments and interviews to ensure readiness and a good fit with our school's mission. Scholarships and financial aid may be available for eligible families.
        </p>

        <p>
          We also host regular parent workshops, Islamic events, and school community days to foster unity and growth among students and families.
        </p>

        <p>
          If you'd like to learn more or tour our campus, feel free to contact us at:
          <br />📞 Phone: (123) 456-7890
          <br />📧 Email: info@muslimschool.org
          <br />📍 Address: 123 Faith Lane, Cityville, State
        </p>

        <div className="text-center mt-8">
          <Link to="/ApplyNow">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Learnmore
