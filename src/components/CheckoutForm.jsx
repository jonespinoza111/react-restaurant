import React, { useContext, useEffect, useState } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import BillingInfoFieldSet from "./BillingInfoFieldSet";
import UserInfoFieldSet from "./UserInfoFieldSet";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const { checkoutTotal, cart } = useContext(ShoppingCartContext);

  const [radioValue, setRadioValue] = useState("female");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaymentTypeChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let orderDetails = {
      name: `${firstName} ${lastName}`,
      email,
      phoneNumber,
      cart,
      checkoutTotal,
      paymentReceived: true
    };

    if (!firstName || !lastName || !email) {
      return;
    }

    if (radioValue === 'male') {
      orderDetails.paymentReceived = false;
      let orderResult = await fetch("https://orders-server-7xkr.onrender.com/order-successful", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderDetails }),
      })

      orderResult = await orderResult.json()

      if (orderResult.success) {
        navigate(`/order-complete?order_number=${orderResult.order.orderNumber}`);
      } else {
        setMessage('The order could not be created.');
        return;
      }
    }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);


    let stripeResult = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `/order-complete`,
      },
      redirect: 'if_required'
    })


    if (!stripeResult.error) {
      let orderResult = await fetch("https://orders-server-7xkr.onrender.com/order-successful", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderDetails }),
      })

      orderResult = await orderResult.json()

      if (orderResult.success) {
        navigate(`/order-complete?order_number=${orderResult.order.orderNumber}`);
      } else {
        setMessage('The order could not be created.');
      }
    }

    if (stripeResult.error.type === "card_error" || stripeResult.error.type === "validation_error") {
      setMessage(stripeResult.error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[40%] py-5 px-10 bg-slate-200">
      <form className="checkout-form w-[100%]" onSubmit={handleSubmit}>
        <div className="row summary-row flex justify-center items-center mt-4 mb-5 px-[0.3em]">
          <span className="summary uppercase font-bold text-[0.8em]">
            Complete Your Order
          </span>
        </div>
        <UserInfoFieldSet
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          handleChange={handlePaymentTypeChange}
          radioValue={radioValue}
        />
        <BillingInfoFieldSet radioValue={radioValue} />
        <div className="button-container place-order-button w-[100%] mt-10 mb-5">
          <button
            type="submit"
            className="checkout-btn remove-btn text-white w-[100%] text-sm py-4 md:py-4 text-700 font-bold bg-black hover:bg-[#454545] transition-colors duration-75 "
            disabled={isLoading || !stripe || !elements}
          >
            {isLoading ? (<CircularProgress />) : 'Place Order'}
          </button>
        </div>
        {message && <div id="payment-message" className="text-[0.7em] w-[80%] md:w-[100%] font-thin text-center text-red-700">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
