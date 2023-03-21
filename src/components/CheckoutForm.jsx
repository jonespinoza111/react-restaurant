import React, { useContext, useEffect, useState } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import BillingInfoFieldSet from "./BillingInfoFieldSet";
import UserInfoFieldSet from "./UserInfoFieldSet";
import ShoppingCartContext from "../context/ShoppingCartContext";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { checkoutTotal, cart } = useContext(ShoppingCartContext);

  const [radioValue, setRadioValue] = useState("female");
  // const [userInfoFields, setUserInfoFields] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  // });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handlePaymentTypeChange = (e) => {
    setRadioValue(e.target.value);
  };

  // const handleTextInputChange = (e) => {
  //   const value = evt.target.value;
  //   console.log('eeee', e.target);

  //   setUserInfoFields((prev) => {
  //     return {
  //       ...prev,
  //       [evt.target.name]: value,
  //     };
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Hi hi hi values fn", firstName);
    console.log("Hi hi hi values ln ", lastName);
    console.log("Hi hi hi values em", email);
    console.log("Hi hi hi values pn", phoneNumber);
    if (!firstName || !lastName || !email) {
      return;
    }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    let orderDetails = {
      name: `${firstName} ${lastName}`,
      email,
      phoneNumber,
      cart,
      checkoutTotal,
    };

    const reponse = await fetch("http://localhost:5000/order-successful", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderDetails }),
    });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://127.0.0.1:5173/order-complete",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[40%] py-5 px-10 bg-slate-200">
      <form className="checkout-form w-[100%]" onSubmit={handleSubmit}>
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
            Place Order
          </button>
        </div>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
