import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartContext from "../context/ShoppingCartContext";

const TotalOrder = ({ path = "", total = 0, totalItems = 1 }) => {
  const taxAmount = parseFloat((total * 0.085).toFixed(2));
  const isCartEmpty = totalItems === 0;
  const checkoutTotal = (total + taxAmount).toFixed(2);
  const navigate = useNavigate();
  const { updateCheckoutTotal } = useContext(ShoppingCartContext);

  const checkoutHandler = () => {
    updateCheckoutTotal(checkoutTotal);
    navigate('/checkout');
  }

  return (
    <div className="total-container w-[13em] md:w-[13em] border-2 bg-white h-auto flex flex-col justify-start p-[1em] my-5 xl:my-0 mb-[10em]">
      <div className="row summary-row flex justify-between items-center px-[0.3em]">
        <span className="summary uppercase font-bold text-[0.8em]">
          Order Summary
        </span>
      </div>
      <div className="row items-row flex justify-between items-center px-[0.3em]">
        <p className="font-thin text-[0.7em]">
          Cart Subtotal ({totalItems} Items):{" "}
        </p>
        <span className="text-[0.7em] font-light">${total.toFixed(2)}</span>
      </div>
      <div className="row tax-row flex justify-between items-center px-[0.3em]">
        <p className="font-thin text-[0.7em]">Tax (8.5%): </p>
        <span className="text-[0.7em] font-light">${taxAmount.toFixed(2)}</span>
      </div>
      <hr />
      <div className="row total-row flex justify-between items-center px-[0.3em]">
        <h2 className="font-thin text-[0.7em]">Total: </h2>
        <span className="total-price font-extrabold text-[0.8em]">
          ${checkoutTotal}
        </span>
      </div>
      {path === "/checkout" ? (
        <div className="button-row mt-10">
          <button
            type="submit"
            form="checkout-form"
            className="place-order-btn"
          >
            Place Order
          </button>
        </div>
      ) : (
        <div className="button-row mt-10">
          <button
            type="button"
            className="checkout-btn remove-btn text-white w-[100%] text-sm py-4 px-3 md:py-4 mx-1 text-700 font-bold bg-black hover:bg-[#454545] transition-colors duration-75 "
            disabled={isCartEmpty}
            onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default TotalOrder;
