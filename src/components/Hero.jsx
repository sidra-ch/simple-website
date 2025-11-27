import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='py-25 relatives'>
        <div className='absolute inset-0 opacity-2'>
            <img className='object-center object-cover h-screen w-full' src={assets.gridImg} alt=''/>
        </div>
        <div className='container mx-auto '>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                {/* left side */}
              <div className="w-full md:w-1/2 mt-30 md:ml-0">
                <div className="flex flex-col">
                    <div className="px-4 py-2.5 w-[300px] bg-primary/40 text-white shadow rounded-full mb-6">
                        <span>SuperChange your website today</span>
                    </div>
                    <h1 className='text-4xl md:text-5xl text-dark font-bold mb-8'>
                        <span>Premium web Hosting</span>
                        <br/>
                        <span>Solution for your Business</span>
                    </h1>
                    <p>Lighting-fast hosting with 99.9% uptime, top-notch security, and 24/7 expert support to keep your website running.</p>
                    <div className='relative flex items-center gap-4'>
                        <button className='px-8 py-3 bg-primary text-white font-semibold rounded cursor-pointer shadow-xl '>Get Started</button>
                        <button className='px-8 py-3 border-2 border-dark rounded cursor-pointer text-dark font-semibold shadow-xl'>View Plan</button>
                    </div>
                </div>
              </div>

                      {/* Right side */}
                      <div className='w-full md:w-1/2'> 
                               <img className='w-full h-full rounded object-center object-cover' src={assets.HeroImg} alt=''/>
                      </div>


            </div>
        </div>
    </div>
  )
}

export default Hero