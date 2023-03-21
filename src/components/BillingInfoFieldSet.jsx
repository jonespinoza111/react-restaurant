import React, { useState } from 'react'
import { FormLabel, MenuItem, Select, TextField } from '@mui/material';

const BillingInfoFieldSet = () => {
    const [expirationDate, setExpirationDate] = useState('');

    const handleChange = (event) => {
        setExpirationDate(event.target.value);
    };
    
  return (
    <fieldset className="user-info flex flex-col gap-y-4">
        <FormLabel id="payment-type-label flex justify-center items-center">Billing Info</FormLabel>
        <div className="input-group flex flex-row w-[100%]">
            <div className="input-container name-input w-[100%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Name on Card" variant="outlined" />
            </div>
        </div>
        <div className='input-group flex flex-row w-[100%]'>
            <div className="input-container card-number-input w-[100%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Card Number" variant="outlined" />
            </div>
        </div>
        <div className='input-group flex flex-row w-[100%] gap-x-4'>
            <div className="input-container expiration-date-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Expiration Date" variant="outlined" />
            </div>
            <div className="input-container expiration-date-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Expiration Date" variant="outlined" />
            </div>
        </div>
        <div className="input-group flex flex-row justify-start w-[100%] gap-x-4">
            <div className="input-container security-code-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Security Code" variant="outlined" />
            </div>
            <div className="input-container zip-code-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Zip Code" variant="outlined" />
            </div>
        </div>
    </fieldset>
  )
}

export default BillingInfoFieldSet;
