import React from 'react'
import figImg from "../assests/figmabg2.png"
import blob from "../assests/blob.png"

function Banner4() {
  return (
    <section className='w-full relative flex justify-center pt-28 pb-10'>
        <div className='absolute -top-[100px] -left-[120px] z-0'><img src={blob} alt="" /></div>
        <div className='z-10 w-[86%] max-md:pl-10  h-[700px] rounded-lg flex flex-col justify-center p-8 pl-28 gap-8' style={{
        backgroundImage: `url(${figImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='text-white text-6xl font-bold'>Ready To Get Started?</div>
        <div className='text-white w-[50%] max-md:w-full '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero a nobis cumque quas suscipit, itaque earum odio asperiores repellendus dolore ullam id ad!</div>
        <div className='font-semibold cursor-pointer text-black bg-white rounded-md flex justify-center items-center w-48 h-16'>Download App</div>
      </div>
    </section>
  )
}

export default Banner4