import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141] text-center sm:text-left'>
                <div className='flex items-center gap-2 justify-center sm:justify-start'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>NEW IN</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                    Shop the Latest Trends
                </h1>
                <div className='flex items-center gap-2 justify-center sm:justify-start mt-5'>
                    <p className='font-semibold text-sm md:text-base text-[#414141]'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side (Image) */}
      <div className='w-full sm:w-1/2'>
        <img className='w-full object-cover' src={assets.hero_img} alt="New Arrivals" />
      </div>
    </div>
  )
}

export default Hero;
