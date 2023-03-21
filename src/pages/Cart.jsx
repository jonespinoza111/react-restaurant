import React, { useContext, useEffect, useState } from "react";
import SingleItem from "../components/SingleItem";
import TotalOrder from "../components/TotalOrder";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { calculateTotal } from "../helper/helper";

const Cart = () => {
  const { cart, clearCart } = useContext(ShoppingCartContext);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotal(calculateTotal(cart));
    }
  }, [cart, calculateTotal]);
  return (
    <div className="cart flex flex-col items-center">
      <div className="row my-10 uppercase">Cart</div>
      <div className="flex flex-col xl:flex-row items-center xl:justify-between xl:items-start">
            {cart && cart.length < 1 && (
                <div className="w-[100%]">
                    <h3 className="text-[0.7em] w-[15em] font-thin">No items in the cart.</h3>
                </div>
            )}
        <ul className="cart-items w-[80%] xl:w-[66%] flex flex-col justify-center items-center mb-10">
            {cart && cart.map((item) => <SingleItem key={item.id} info={item} />)}
        </ul>
        {total > 0 && <TotalOrder total={total} totalItems={cart && cart.length} />}
      </div>
    </div>
  );
};

export default Cart;
