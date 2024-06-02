import React from 'react'

function Faq() {
  return (
    <section className='mb-5 max-md:p-8'>
        <div className='text-orange-600'>FAQ</div>
        <div className='text-5xl font-bold pb-10'>Frequently Asked <br /> Questions</div>
        <div className='grid grid-cols-2 max-md:grid-cols-1 place-items-center gap-4'>
            <div className='bg-orange-600 rounded-md p-10'>
                <div className='text-white text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque hic minima.</div>
            </div>
           
            <div className='bg-white  rounded-md p-10'>
                <div className='text-black text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='text-gray-300 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque hic minima.</div>
            </div>
            <div className='bg-white max-md:bg-orange-600  rounded-md p-10'>
                <div className='text-black max-md:text-white text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='text-gray-300 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque hic minima.</div>
            </div>
            <div className='bg-orange-600 max-md:bg-white  rounded-md p-10'>
                <div className='text-white max-md:text-black text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque hic minima.</div>
            </div>
            
            <div className='bg-orange-600 rounded-md p-10'>
                <div className='text-white text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque hic minima.</div>
            </div>
            <div className='bg-white rounded-md p-10'>
                <div className='text-black text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='text-gray-300 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cumque hic minima.</div>
            </div>
        </div>
    </section>
  )
}

export default Faq