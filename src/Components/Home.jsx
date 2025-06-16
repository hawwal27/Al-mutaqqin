import React from 'react'
import Navbar from '../Pages/Navbar'
import Hero from '../Pages/Hero'
import AboutUs from '../Pages/Aboutus'
import Testimonials from '../Pages/Testimonial'
import ContactUs from '../Pages/Contactus'
import Footer from '../Pages/Footer'
import FAQ from '../Pages/Faq'

const Home = () => {
  return (
        <>
      <div>

      <Navbar />

      <div id="hero">
      <Hero/>
      </div>
      <div id="about">
      <AboutUs />
      </div>

      
      <div id="contact">
        <ContactUs />
      </div>
      
      <div id="testimonial">
        <Testimonials />
      </div>


      <div id="faq">
        <FAQ/>
      </div>



      <div id='footer'>
        <Footer />
        </div>
    </div>
    </>
  )
}

export default Home
