import React, { useContext } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext';

const Checkout = () => {
  const { checkoutTotal } = useContext(ShoppingCartContext);
  return (
    <div>
      This is the Checkout Page
      {checkoutTotal && checkoutTotal}
    </div>
  )
}

export default Checkout;
