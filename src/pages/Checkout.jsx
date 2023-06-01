import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { calculateTotal } from '../helper/helper';
import CheckoutForm from '../components/CheckoutForm';
import ShoppingCartContext from '../context/ShoppingCartContext';
import TotalOrder from '../components/TotalOrder';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { cart } = useContext(ShoppingCartContext);
  let [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (cart && cart.length) {
      setTotal(calculateTotal(cart));
    } else {
      navigate('/cart')
    }
  }, [cart, calculateTotal]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (cart) {
        fetch("https://orders-server-7xkr.onrender.com/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart }),
        })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
          })
    }
  }, [cart]);


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
    loader: 'auto'
  };

  return (
      <div className='checkout-page flex flex-col items-center pt-[2em] pb-[10em]'>
        {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
                <div className='flex flex-col justify-start items-center xl:flex-row w-[100%] xl:justify-center xl:items-start'>
                    <CheckoutForm />
                    {total > 0 && <TotalOrder total={total} totalItems={cart && cart.length} includeButton={false} />}
                </div>
            </Elements>
        )}
      </div>
  )
}

export default Checkout;
