import React, { useContext, useEffect, useState } from 'react'
import ShoppingCartContext from '../context/ShoppingCartContext';

const SingleItem = ({ info }) => {
    const { id, name, imageURL, quantity, price } = info;
    const { removeItemFromCart, updateItemInCart } = useContext(ShoppingCartContext);

    const [disabled, setDisabled] = useState(true);
    const [quantityValue, changeQuantityValue] = useState(quantity);

    useEffect(() => {
        setDisabled(quantityValue === quantity || quantityValue === "");
      }, [quantityValue, quantity]);

    const handleChange = event => {
        const targetVal =
            event.target.value !== "" ? parseInt(event.target.value) : "";
        const inRange = targetVal >= 0 && targetVal <= 20;
        if (inRange) {
            changeQuantityValue(targetVal);
        }
    };

    const addQuantity = () => {
        if (quantityValue === "") {
          changeQuantityValue(1);
        } else if (quantityValue < 20) {
          changeQuantityValue(prev => prev + 1);
        }
    };

    const subQuantity = () => {
        if (quantityValue > 0) {
            changeQuantityValue(prev => prev - 1);
        }
    };
  return (
    <li className="meal-item flex flex-col md:flex-row md:justify-start w-[10em] md:w-[100%] md:border-t-2 my-5 md:my-0 border-black shadow-md">
      <div className="meal-image-container row-item w-[100%] h-[6em] md:w-[150px] md:h-[120px] p-0 flex flex-row justify-start items-center">
        <img className="meal-image h-[100%] w-[100%] object-cover" src={`../src/assets/menu${imageURL}`} alt={name} />
      </div>
      <div className="meal-desc row-item w-[100%] h-auto md:w-[160px] md:h-[120px] py-5 md:mx-[20px] md:p-0 flex flex-row justify-center md:justify-start items-center">
        <span className="name text-[0.7em] capitalize text-left">{name}</span>
      </div>
      <div className="meal-price row-item w-[100%] h-auto md:w-[150px] md:h-[120px] md:mx-[10px] p-0 flex flex-row justify-center md:justify-start items-center">
        <p className="price text-[0.7em] font-thin">${price.toFixed(2)}</p>
      </div>
      <div className="quantity row-item w-[100%] md:w-[250px] md:h-[120px] md:mx-[10px] p-0 flex flex-row justify-center my-5 md:m-0 md:justify-start items-center">
        <div className="quantity-control h-[1.4em] md:h-[2em] flex justify-center items-center">
          <div className="box minus p-[0.5em] h-[100%] border-[#bebcbc] border cursor-pointer flex justify-center items-center bg-black hover:bg-[#454545] text-white" onClick={subQuantity}>
            {/* <i className="fas fa-minus"></i> */}
            -
          </div>
          <input
            className="box number px-0 md:px-[1em] w-[2em] md:w-[4em] h-[100%] text-center"
            name="quantity"
            type="number"
            min="0"
            max="20"
            value={quantityValue}
            onChange={handleChange}
          />
          <div className="box plus p-[0.5em] h-[100%] border-[#bebcbc] border cursor-pointer flex justify-center items-center bg-black hover:bg-[#454545] text-white" onClick={addQuantity}>
            {/* <i className="fas fa-plus"></i> */}
            +
          </div>
        </div>
      </div>
      <div className="remove row-item w-[100%] h-auto md:w-[150px] md:h-[120px] m-0 md:mx-[10px] p-0 flex flex-row justify-start items-center">
        <div className="buttons w-[100%] flex flex-col justify-center items-center md:gap-y-2">
          <button
            type="button"
            onClick={() => updateItemInCart(id, quantityValue)}
            disabled={disabled}
            className="update-btn w-[100%] text-sm py-4 px-3 md:py-2 mx-1 text-700 font-bold bg-blue-200 hover:bg-blue-300 transition-colors duration-75 disabled:bg-gray-300"
          >
            <span>Update</span>
          </button>
          <button onClick={() => removeItemFromCart(id)} className="remove-btn text-white w-[100%] text-sm py-4 px-3 md:py-2 mx-1 text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75 ">
            <i className="far fa-trash-alt"></i>
            <span>Remove</span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default SingleItem;
