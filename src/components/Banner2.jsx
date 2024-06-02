import React from 'react'
import bg from "../assests/figmabg2.svg"

function Banner2() {
  return (
    <section className='p-4 grid grid-cols-2 max-md:grid-cols-1 w-full h-[700px] lg:h-[900px]' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div></div>
        <div className='p-8 pt-14 lg:pt-36 lg:mt-14'>
            <div className='text-orange-500 text-xl font-normal '>FEATURES</div>
            <div className='text-6xl font-bold'>Uifry Premium</div>
            <div className='flex flex-col gap-3 pt-6'>
            <div className='grid grid-cols-1 gap-2'>
                <div className='flex'><img src="" alt="" /><div className='font-semibold'>Budgeting Intervals</div></div>
                <div className='w-[90%] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit doloribus nisi unde est architecto obcaecati rem. In corrupti error repellat autem aut.</div>
            </div>
            <div className='grid grid-cols-1 gap-2'>
                <div className='flex'><img src="" alt="" /><div className='font-semibold'>Budgeting Intervals</div></div>
                <div className='w-[90%] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit doloribus nisi unde est architecto obcaecati rem. In corrupti error repellat autem aut.</div>
            </div>
            <div className='grid grid-cols-1 gap-2'>
                <div className='flex'><img src="" alt="" /><div className='font-semibold'>Budgeting Intervals</div></div>
                <div className='w-[90%] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit doloribus nisi unde est architecto obcaecati rem. In corrupti error repellat autem aut.</div>
            </div></div>
            
        </div>

    </section>
  )
}

export default Banner2