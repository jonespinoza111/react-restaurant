import React, { useState } from "react";
import { TextField } from "@mui/material";
import OrderDetails from "../components/OrderDetails";

const OrderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const searchOrder = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/order${searchValue}`);
    const data = await response.json();

    if (data.success) {
      console.log("data is back now ", data.order[0]);
      setOrderDetails(data.order[0]);
      setSearchError('');
    } else {
      console.log("getting the data was not a success");
      setOrderDetails(null);
      setSearchError("Sorry! The order you searched was not found.");
    }
  };
  return (
    <div className="order-search flex flex-col items-center">
      <div className="row my-10 uppercase">Find an order</div>
      <form className="order-search-form w-[80%] md:w-[20em] flex flex-col items-center justify-center" onSubmit={searchOrder}>
        <TextField
          id="outlined-search"
          className="w-[100%]"
          label="# Order Number"
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="button-container place-order-button w-[100%] mt-10 mb-5">
          <button
            type="submit"
            className="checkout-btn remove-btn text-white w-[100%] text-sm py-4 md:py-4 text-700 font-bold bg-black hover:bg-[#454545] transition-colors duration-75"
          >
            Search
          </button>
        </div>
        {searchError && (
          <h3 className="text-[0.7em] w-[80%] md:w-[15em] font-thin text-red-700">{searchError}</h3>
        )}
        {orderDetails && (
          <OrderDetails info={orderDetails} />
        )}
      </form>
    </div>
  );
};

export default OrderSearch;
