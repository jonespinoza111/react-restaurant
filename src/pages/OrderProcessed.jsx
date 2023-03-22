import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ShoppingCartContext from "../context/ShoppingCartContext";

const OrderProcessed = () => {
  const { clearCart, updateCheckoutTotal } = useContext(ShoppingCartContext);

  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const updatePaymentReceived = async (orderNumber) => {
    let response = await fetch("http://localhost:5000/payment-successful", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderNumber }),
    });
  }

  useEffect(() => {
    if (
      searchParam.get("payment_intent") &&
      searchParam.get("redirect_status") === "succeeded"
    ) {
      updatePaymentReceived(searchParam.get("order_number"));
      localStorage.removeItem("localCart");
      clearCart();
      updateCheckoutTotal(0);
    } else {
      navigate("/menu");
    }
  }, []);

  return (
    <div className="order-processed-page flex flex-col justify-start items-center pb-[10em]">
      <div className="row my-10 uppercase">Order Complete</div>
      <h3 className="text-[0.7em] w-[15em] font-thin">
        Thank you for your order!
      </h3>
      <h3 className="text-[0.7em] w-[15em] font-thin">
        Your food will be ready in about 35 minutes
      </h3>
    </div>
  );
};

export default OrderProcessed;
