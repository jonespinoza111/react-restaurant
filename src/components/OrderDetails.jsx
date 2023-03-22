import React from 'react'

const OrderDetails = ({ info }) => {
  return (
    <div className='max-w-[20em] w-[20em] mb-[5em] flex flex-col px-5 pt-4 pb-10 border-2'>
      <div className='mb-4'>Order Details</div>
      <div className='order-details-container flex justify-center'>
        <div className='flex flex-col items-start w-[100%]'>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Order Number:</h2>
                <h3 className='text-[0.7em] font-thin w-auto text-start'>#{info.orderNumber}</h3>
            </div>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Name:</h2>
                <h3 className='text-[0.7em] font-thin w-[50%]'>{info.name}</h3>
            </div>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Email:</h2>
                <h3 className='text-[0.7em] font-thin w-[50%]'>{info.email}</h3>
            </div>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Order Date:</h2>
                <h3 className='text-[0.7em] font-thin w-[50%]'>Aug 17, 2023 @8:55pm</h3>
            </div>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Payment:</h2>
                <h3 className='text-[0.7em] font-thin w-[50%]'>{info.paymentReceived ? 'Received' : 'Not recieved'}</h3>
            </div>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Phone Number:</h2>
                <h3 className='text-[0.7em] font-thin w-[50%]'>{info.phoneNumber ? info.phoneNumber : 'NA'}</h3>
            </div>
            <div className='flex flex-row items-center text-start w-[100%]'>
                <h2 className='text-[0.8em] font-light w-[50%]'>Order Total:</h2>
                <h3 className='text-[0.7em] font-thin w-[50%]'>${info.checkoutTotal}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;
