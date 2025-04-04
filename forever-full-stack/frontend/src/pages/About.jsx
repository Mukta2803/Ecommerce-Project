import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'FASHINO'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Fashino" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Fashino was born out of a passion for style and a desire to revolutionize the way people experience fashion online. Our journey began with a simple idea: to create a platform where fashion lovers could easily explore, discover, and shop for the latest trends, all from the comfort of their homes.</p>
              <p>Since our inception, we’ve worked tirelessly to curate an extensive collection of high-quality fashion pieces, from timeless classics to the latest in-season trends. Our collection is carefully selected from trusted brands, ensuring you always have access to the best in fashion.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Fashino, our mission is to empower every individual to express themselves through fashion. We’re dedicated to making shopping for fashion a seamless, enjoyable experience that brings out the best in you—from browsing the latest collections to receiving your order at your doorsteps.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE FASHINO'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Fashion:</b>
            <p className=' text-gray-600'>Each item in our collection is meticulously selected to ensure that you receive only the highest quality fashion, crafted to last and designed to turn heads.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trendy Styles:</b>
            <p className=' text-gray-600'>At Fashino, we bring you the latest styles, straight from the runway to your wardrobe. Stay ahead of the trends with pieces that make a statement.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated customer support team is here to help you every step of the way—ensuring your shopping experience is nothing short of perfect.</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About;
