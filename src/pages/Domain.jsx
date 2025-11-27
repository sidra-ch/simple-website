import React from 'react'
import { domainData } from '../assets/assets'
import { FaArrowRightLong } from 'react-icons/fa6'

const Domain = () => {
  return (
    <div className="py-40 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-dark font-bold">
            Find Best Unique Domains Checker
          </h1>
          <p className="text-gray-600 mt-2">
            Web Hosting, Domain Name and Hosting Center Solutions
          </p>
        </div>

        {/* Domain Search Box */}
        <div className="bg-white rounded-xl max-w-3xl mx-auto p-8 mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row">

            <input
              className=" w-full px-4 py-3 border border-primary rounded-l-md outline-none"
              placeholder="Search for your domain"
              type="text"
            />

            <select
              className="px-4 py-3 border border-primary border-l-0 outline-none"
            >
              <option>.com</option>
              <option>.in</option>
              <option>.net</option>
              <option>.org</option>
              <option>.co</option>
            
            </select>

            <button className="bg-primary text-white px-6 py-3 rounded-r-md font-medium cursor-pointer">
              Search
            </button>

          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-40 text-center">
          <h1 className="max-w-2xl mx-auto text-4xl md:text-5xl text-dark font-bold">
            EliteHost Straight Forward Domain Pricing
          </h1>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-16 gap-6">
          {domainData.map((domain, index) => (
            <div
              key={index}
              className="p-10 border border-primary rounded-2xl shadow-sm hover:shadow-lg transition duration-200"
            >
              <img className="mb-6" src={domain.image} alt="" />
              <p className="text-dark/80 mb-6">{domain.content}</p>
              <h1 className="text-dark text-xl font-bold mb-6">{domain.price}</h1>

              <a
                href="#"
                className="text-primary font-bold flex items-center gap-2 hover:underline"
              >
                Get Offer
                <FaArrowRightLong />
              </a>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Domain
