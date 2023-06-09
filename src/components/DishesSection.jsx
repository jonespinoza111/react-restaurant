import React from 'react'

const DishesSection = () => {
  return (
    <div className="flex h-auto py-20 flex-row justify-center items-center">
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-x-8 gap-y-10 h-auto">
        <div className='relative block-1 bg-gray-500 w-[80%] lg:w-[20em] xl:w-[22em] md:h-[15em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='/assets/beef-and-broccoli.jpg' />
            <div className='cover flex flex-row justify-center md:justify-start items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col justify-center items-center md:items-start md:text-start w-[10em]'>
                    <h3 className='text-white md:text-[2em] mb-5 leading-none'>Beef & Broccoli</h3>
                    <p className='text-white font-thin hidden sm:block text-[0.9em] md:text-[1em]'>Tender strips of beef and fresh broccoli florets stir-fried in a savory brown sauce.</p>
                </div>
            </div>
        </div>
        <div className='relative block-2 bg-yellow-200 w-[80%] lg:w-[15em] xl:w-[20em] md:h-[15em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='/assets/crab-ragoon.jpg' />
            <div className='cover flex flex-row justify-center md:justify-end items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col justify-center items-center md:items-start md:text-start w-[10em]'>
                    <h3 className='text-white md:text-[2em] mb-5 leading-none'>Crab Ragoon</h3>
                    <p className='text-white font-thin hidden sm:block text-[0.9em] md:text-[1em] '>Golden fried wonton wrappers filled with a creamy mixture of crab meat and cream cheese.</p>
                </div>
            </div>
        </div>
        <div className='relative block-3 bg-gray-500 w-[80%] lg:w-[15em] xl:w-[20em] md:h-[18em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='/assets/chicken-fried-rice.jpg'/>
            <div className='cover flex flex-row justify-center md:justify-start items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col justify-center items-center md:items-start md:text-start w-[10em]'>
                    <h3 className='text-white md:text-[2em] mb-5'>Fried Rice</h3>
                    <p className='text-white font-thin hidden sm:block text-[0.9em] md:text-[1em] '>Classic Chinese dish made with fluffy rice stir-fried with eggs, vegetables, and your choice of meat or tofu.</p>
                </div>
            </div>
        </div>
        <div className='relative block-4 bg-yellow-200 w-[80%] lg:w-[20em] xl:w-[22em] md:h-[18em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
            <img className='w-[100%] h-[100%]' src='/assets/orange-chicken.jpg' />
            <div className='cover flex flex-row justify-center md:justify-end items-center absolute w-[100%] h-[100%] z-10 bg-black bg-opacity-30 top-0 px-10'>
                <div className='flex flex-col justify-center items-center md:items-start md:text-start w-[10em]'>
                    <h3 className='text-white md:text-[2em] mb-5 leading-none'>Orange Chicken</h3>
                    <p className='text-white font-thin hidden sm:block text-[0.9em] md:text-[1em] '>Crispy fried chicken coated in a sweet and tangy orange sauce with a hint of spice.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DishesSection
