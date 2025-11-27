import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className="py-20 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-dark font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-dark/80">
            Have a question? Our Team is here to help you with any inquiries
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Contact Form */}
          <div className="w-full md:w-1/2 shadow rounded-xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label className="block text-dark/80 mb-2 font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full px-4 sm:px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50 placeholder:text-sm"
                />
              </div>
              <div>
                <label className="block text-dark/80 mb-2 font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full px-4 sm:px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50 placeholder:text-sm"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-dark/80 mb-2 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 sm:px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50 placeholder:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-dark/80 mb-2 font-semibold">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full px-4 sm:px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50 placeholder:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-dark/80 mb-2 font-semibold">Message</label>
              <textarea
                placeholder="Enter message"
                className="w-full h-32 sm:h-40 px-4 sm:px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50 placeholder:text-sm resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary text-white font-semibold py-3 rounded hover:bg-primary/90 transition">
              Send Message
            </button>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">

            <div className="shadow rounded-xl p-6 sm:p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Contact Information</h3>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <FaLocationDot className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark">Address</h4>
                  <p className="text-dark/80 text-sm sm:text-base">123 Cloud Street, San Francisco, CA 9876</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark">Phone</h4>
                  <p className="text-dark/80 text-sm sm:text-base">+123456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark">Email</h4>
                  <p className="text-dark/80 text-sm sm:text-base">ms.chaudhary@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-xl p-6 sm:p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-4">Support Hours</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-dark/80">Monday - Friday</span>
                  <span className="font-bold text-dark">24/7</span>
                </li>
                <li className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-dark/80">Saturday</span>
                  <span className="font-bold text-dark">24/7</span>
                </li>
                <li className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-dark/80">Sunday</span>
                  <span className="font-bold text-dark">24/7</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12 md:mt-20 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019902771397!2d-122.41941518468196!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c37a7f67b%3A0x8f9f784f7f0f1a0b!2s123%20Cloud%20Street%2C%20San%20Francisco%2C%20CA%209876!5e0!3m2!1sen!2sus!4v1697069051234!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elithosting Location"
          ></iframe>
        </div>

      </div>
    </div>
  )
}

export default Contact
