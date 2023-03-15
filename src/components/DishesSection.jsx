import React from 'react'

const DishesSection = () => {
  return (
    <div className="flex h-auto py-20 flex-row justify-center items-center">
      <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-10">
        <div className='relative block-1 bg-gray-500 w-[25em] h-[15em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='../src/assets/beef-and-broccoli.jpg' />
            <div className='cover flex flex-row items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col items-start text-start w-[10em]'>
                    <h3 className='text-white text-[2em] mb-5 leading-none'>Beef & Broccoli</h3>
                    <p className='text-white font-thin text-md'>Tender strips of beef and fresh broccoli florets stir-fried in a savory brown sauce.</p>
                </div>
            </div>
        </div>
        <div className='relative block-2 bg-yellow-200 w-[20em] h-[15em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='../src/assets/crab-ragoon.jpg' />
            <div className='cover flex flex-row justify-end items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col items-start text-start w-[10em]'>
                    <h3 className='text-white text-[2em] mb-5 leading-none'>Crab Ragoon</h3>
                    <p className='text-white font-thin text-md '>Golden fried wonton wrappers filled with a creamy mixture of crab meat and cream cheese.</p>
                </div>
            </div>
        </div>
        <div className='relative block-3 bg-gray-500 w-[20em] h-[18em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='../src/assets/chicken-fried-rice.jpg'/>
            <div className='cover flex flex-row items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col items-start text-start w-[10em]'>
                    <h3 className='text-white text-[2em] mb-5'>Fried Rice</h3>
                    <p className='text-white font-thin text-md '>Classic Chinese dish made with fluffy rice stir-fried with eggs, vegetables, and your choice of meat or tofu.</p>
                </div>
            </div>
        </div>
        <div className='relative block-4 bg-yellow-200 w-[25em] h-[18em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='../src/assets/orange-chicken.jpg' />
            <div className='cover flex flex-row justify-end items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col items-start text-start w-[10em]'>
                    <h3 className='text-white text-[2em] mb-5 leading-none'>Orange Chicken</h3>
                    <p className='text-white font-thin text-md '>Crispy fried chicken coated in a sweet and tangy orange sauce with a hint of spice.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DishesSection
