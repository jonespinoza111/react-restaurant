import React from 'react'
import BillingInfoFieldSet from './BillingInfoFieldSet';
import UserInfoFieldSet from './UserInfoFieldSet';

const CheckoutForm = () => {
  return (
    <div className='w-[40%] p-5 bg-slate-200'>
      <UserInfoFieldSet handleChange={() => console.log('hello')} />
      <BillingInfoFieldSet />
    </div>
  )
}

export default CheckoutForm;
