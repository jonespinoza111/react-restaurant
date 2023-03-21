import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const UserInfoFieldSet = ({ paymentType = "Pay online", handleChange }) => {
  return (
    <fieldset className="user-info flex flex-col gap-y-4">
        <FormLabel id="payment-type-label flex justify-center items-center">User Info</FormLabel>
        <div className="input-group flex flex-row w-[100%] gap-x-4">
            <div className="input-container name-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="First Name" variant="outlined" />
            </div>
            <div className="input-container name-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Last Name" variant="outlined" />
            </div>
        </div>
        <div className='input-group flex flex-row w-[100%] gap-x-4'>
            <div className="input-container email-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Email" variant="outlined" />
            </div>
            <div className="input-container phone-number-input w-[48%]">
                <TextField id="outlined-basic" className='w-[100%]' label="Phone Number" variant="outlined" />
            </div>
        </div>
        <div className="input-container payment-type w-[100%] mb-5">
            <FormLabel id="payment-type-label flex justify-center items-center">Payment Type</FormLabel>
            <RadioGroup
                row
                aria-labelledby="payment-type-group"
                defaultValue="female"
                name="radio-buttons-group"
                className='w-[100%] flex flex-row justify-center'
            >
                <FormControlLabel value="female" control={<Radio />} label="Pay Online" />
                <FormControlLabel value="male" control={<Radio />} label="Pay in Store" />
            </RadioGroup>
        </div>
    </fieldset>
  )
}

export default UserInfoFieldSet;
