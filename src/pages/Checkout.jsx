import React, { useContext } from 'react'
import CheckoutForm from '../components/CheckoutForm';
import ShoppingCartContext from '../context/ShoppingCartContext';

const Checkout = () => {
  const { checkoutTotal } = useContext(ShoppingCartContext);
  return (
    <div className='checkout-page flex flex-col items-center'>
      This is the Checkout Page
      {checkoutTotal && checkoutTotal}
      <CheckoutForm />
    </div>
  )
}

export default Checkout;
