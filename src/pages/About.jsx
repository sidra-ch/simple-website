import React from 'react'
import { assets, teamData } from '../assets/assets'

const About = () => {
  return (
    <div className='py-40 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>About Elithosting</h1>
          <p className='text-xl text-dark/80'>Learn about our story and mission to provide the best hosting experience</p>
        </div>
          <div className='flex flex-col md:flex-row items-center gap-12 mb-8'>
            <div className='w-full md:w-1/2'>
               <h1 className='text-3xl text-dark font-bold mb-6'>Our Story</h1>
               <p className='text-xl text-dark/80 mb-6'>Elithosting started with a vision to provide fast, reliable, and affordable web hosting solutions for businesses and individuals.</p>
               <p className='text-xl text-dark/80 mb-6'>We specialize in premium hosting, domains, and servers, delivering secure, high-performance websites with modern tools and exceptional support.</p>
               <p className='text-xl text-dark/80 mb-6'>Our mission is to empower clients online, offering seamless hosting experiences, 24/7 support, and innovative solutions for growth.</p>
              
            </div>
            <div className='w-full md:w-1/2'>
             <img className='h-96 w-full object-cover' src={assets.aboutImg} alt=''/>
            </div>
          </div>

            <div className='text-center mb-16'>
              <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Part of our team</h1>
              <p className='text-xl text-dark/80 max-w-2xl text-center mx-auto'>Over the last 19 years, Site Ground has grown to more than A considerable number of our people started working</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6'>
               {teamData.map((team, index) => (
                <div key={index} className='overflow-hidden w-70 shadow rounded-2xl'>
                  <img className='object-cover object-center w-full h-60' src={team.image} alt='' />
                  <div className='text-center p-8'>
                    <h1 className='text-2xl text-dark font-bold'>{team.name}</h1>
                    <p className='text-dark/60 font-bold'>{team.designation}</p>
                    </div>
                </div>
               ))}
            </div>
      </div>
    </div>
  )
}

export default About