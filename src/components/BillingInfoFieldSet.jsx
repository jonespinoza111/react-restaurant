import React, { useState } from "react";
import { FormLabel, MenuItem, Select, TextField } from "@mui/material";
import { PaymentElement } from "@stripe/react-stripe-js";

const BillingInfoFieldSet = ({ radioValue }) => {
  return (
    <fieldset
      className={`user-info flex flex-col gap-y-4 ${
        radioValue === "male" && "hidden"
      }`}
    >
      <FormLabel id="payment-type-label flex justify-center items-center">
        Billing Info
      </FormLabel>
      <PaymentElement />
    </fieldset>
  );
};

export default BillingInfoFieldSet;
