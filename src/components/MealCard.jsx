import React, { useContext } from "react";
import Card from "@mui/material/Card";
import ShoppingCartContext from "../context/ShoppingCartContext";

const MealCard = ({ info }) => {
  const { name, imageURL, price } = info;
  const { addItemToCart } = useContext(ShoppingCartContext);
  
  return (
    <Card className="mx-5 my-10 w-[300px]">
      <div className="meal-image-container w-[100%] h-[235px]">
        <img
          className="meal-image w-[100%] h-[100%]"
          alt={name}
          src={`../src/assets/menu${imageURL}`}
        />
      </div>
      <div className="extra my-2">
        <h4 className="meal-name text-[0.7em] capitalize">{name}</h4>
        {price && (
          <h4 className="price text-[0.6em] font-thin">${price.toFixed(2)}</h4>
        )}
      </div>
      <button className="text-lg text-white w-[100%] px-3 py-2 text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75" onClick={() => addItemToCart(info)}>
        Add to Cart
      </button>
    </Card>
  )
};

export default MealCard;