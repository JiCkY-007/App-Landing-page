import React from 'react'

function Header() {
  return (
    <section className='rounded-md sticky top-4 w-[80%] max-md:w-full flex justify-between p-6 bg-white z-20'>
        <div className='flex gap-4 p-4 font-semibold items-center'>
            <div className='font-bold text-xl px-3 cursor-pointer'><div><img src="" alt="" /></div>uifry</div>
            <div className='text-orange-600 cursor-pointer max-md:hidden'>Home</div>
            <div className='cursor-pointer max-md:hidden'>About Us</div>
            <div className='cursor-pointer max-md:hidden'>Pricing</div>
            <div className='cursor-pointer max-md:hidden'>Features</div>
        </div>
        <div className='text-white p-4 px-6 bg-black rounded-md cursor-pointer'>Download</div>
    </section>
  )
}

export default Header