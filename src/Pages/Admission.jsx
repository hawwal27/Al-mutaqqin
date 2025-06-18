import React from 'react'
import { Link } from 'react-router-dom'

const Admission = () => {
  return (
     <div className=" bg-gradient-to-r from-green-50 to-white max-w-4xl mx-auto p-6">
      {/* Breadcrumb
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div> */}

      <h1 className="text-4xl font-bold text-center mb-6 text-green-700">Admissions Information</h1>

      <div className="space-y-6 text-lg text-gray-700">
        <p>
          We are excited that you are considering our Muslim school for your child's education. Below is important information regarding our admission process, eligibility, and key dates.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Admission Process</h2>
        <ul className="list-disc list-inside">
          <li>Step 1: Complete the <Link to="ApplyNow" className="text-blue-600 underline">application form</Link>.</li>
          <li>Step 2: Attend a family interview and school tour.</li>
          <li>Step 3: Student assessment (for applicable age levels).</li>
          <li>Step 4: Receive admission decision via email or phone.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Eligibility Requirements</h2>
        <ul className="list-disc list-inside">
          <li>Children must be at least 4 years old by the start of the academic year.</li>
          <li>Commitment from parents/guardians to support the Islamic school environment.</li>
          <li>Willingness of the student to follow school guidelines and participate in all activities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Application Opens: March 1st</li>
          <li>Deadline for Applications: July 31st</li>
          <li>Interview Dates: Ongoing (scheduled after application)</li>
          <li>School Year Begins: September 5th</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Tuition and Fees</h2>
        <p>
          Tuition is structured to be affordable while supporting quality education. Financial aid and scholarship opportunities are available. Please contact our office for the latest fee structure.
        </p>

        <p>
          For questions or to schedule a visit, contact us:
          <br />📞 (123) 456-7890
          <br />📧 admissions@muslimschool.org
        </p>

        <div className="text-center mt-8">
          <Link to="ApplyNow">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Start Application
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Admission
