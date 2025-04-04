import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // You can add functionality here for newsletter submission (e.g., API call)
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe & Get 20% Off Your First Order</p>
      <p className='text-gray-400 mt-3'>
        Stay updated with the latest fashion trends and exclusive offers from Fashino.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox;
