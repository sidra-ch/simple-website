import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaServer, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-20 bg-gray-700'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-2 mb-6'>
              <FaServer className='text-2xl font-bold text-primary'/>
              <span className='text-white font-bold text-2xl'>NovaHost</span>
            </div>
            <p className='text-gray-400 mb-6'>
              Premium web hosting solutions with blazing fast speed and reliable performance.
            </p>

            <div className='flex items-center gap-4 text-gray-400 mb-6'>
              <FaTwitter className='hover:text-white cursor-pointer'/>
              <FaFacebook className='hover:text-white cursor-pointer'/>
              <FaLinkedin className='hover:text-white cursor-pointer'/>
              <FaInstagram className='hover:text-white cursor-pointer'/>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h3 className='text-2xl text-white font-bold mb-8'>Services</h3>
            <ul className='space-y-4 text-gray-400'>
              <li className='hover:text-white'><Link to="#">Web Hosting</Link></li>
              <li className='hover:text-white'><Link to="#">VPS Hosting</Link></li>
              <li className='hover:text-white'><Link to="#">Dedicated Server</Link></li>
              <li className='hover:text-white'><Link to="#">Domain Name</Link></li>
            </ul>
          </div>

          <div className='flex flex-col items-start'>
            <h3 className='text-2xl text-white font-bold mb-8'>Company</h3>
            <ul className='space-y-4 text-gray-400'>
              <li className='hover:text-white'><Link to="#">About Us</Link></li>
              <li className='hover:text-white'><Link to="#">Blog</Link></li>
              <li className='hover:text-white'><Link to="#">Careers</Link></li>
              <li className='hover:text-white'><Link to="#">Press</Link></li>
            </ul>
          </div>

          <div className='flex flex-col items-start'>
            <h3 className='text-2xl text-white font-bold mb-8'>Support</h3>
            <ul className='space-y-4 text-gray-400'>
              <li className='hover:text-white'><Link to="#">Help Center</Link></li>
              <li className='hover:text-white'><Link to="#">Contact</Link></li>
              <li className='hover:text-white'><Link to="#">Privacy Policy</Link></li>
              <li className='hover:text-white'><Link to="#">Terms of Services</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
