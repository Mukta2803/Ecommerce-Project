import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Brand Info Section */}
        <div>
          <p className='text-xl font-medium mb-5'>FASHINO</p>
          <p className='w-full md:w-2/3 text-gray-600'>
            Fashino is your go-to destination for the latest trends in fashion. Discover a curated selection of clothing and accessories for men and women. From casual wear to elegant evening styles, we bring the runway to your doorstep.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-800-123-4567</li>
            <li>support@fashino.com</li>
            <li>Follow us on social media: Instagram | Facebook | Twitter</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Fashino.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer;
