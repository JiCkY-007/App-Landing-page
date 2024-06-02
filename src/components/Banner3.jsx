import React from 'react'
import bg from "../assests/bg3.png"


function Banner3() {
  return (
    <section className='p-8 grid grid-cols-2 max-md:grid-cols-1 w-full h-[800px]' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='w-[90%] max-md:w-full p-4 pt-16 pl-10 flex flex-col gap-4 justify-center'>
            <div>
            <div className='text-orange-600'>ADVANTAGES</div>
            <div className='font-bold text-6xl'>Why Choose Uifry?</div></div>
            <div className='font-bold text-2xl'>Clever Notifications</div>
            <div className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id incidunt nesciunt aperiam omnis aspernatur debitis rerum labore, earum repellendus repellat ad culpa at, accusantium enim ipsum, beatae officiis totam facere aliquam sapiente. Est quisquam dolorem eius. Earum, sequi laudantium id inventore ipsum vel sint!</div>
        </div>
      </section>
  )
}

export default Banner3