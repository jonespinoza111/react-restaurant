import React, { useState, useReducer } from "react";
import ShopContext from "./ShoppingCartContext";
import { shopReducer, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAR_CART, UPDATE_CHECKOUT_TOTAL } from "./reducers";

function GlobalState(props) {
  const menuItems = [
    {
      id: 1,
      name: "chicken egg rolls",
      imageURL: "/chicken-egg-rolls.jpg",
      category: "appetizers",
      price: 0.99,
    },
    {
      id: 2,
      name: "chinese donuts",
      imageURL: "/chinese-donuts.jpg",
      category: "appetizers",
      price: 3.5,
    },
    {
      id: 3,
      name: "crabmeat rangoon",
      imageURL: "/crabmeat-rangoon.jpg",
      category: "appetizers",
      price: 4.99,
    },
    {
      id: 4,
      name: "fried dumplings",
      imageURL: "/fried-dumplings.jpg",
      category: "appetizers",
      price: 3.99,
    },
    {
      id: 5,
      name: "fried wonton",
      imageURL: "/fried-wonton.jpg",
      category: "appetizers",
      price: 3.99,
    },
    {
      id: 6,
      name: "teriyaki chicken",
      imageURL: "/teriyaki-chicken.jpg",
      category: "appetizers",
      price: 4.99,
    },
    {
      id: 7,
      name: "beef fried rice",
      imageURL: "/beef-fried-rice.jpg",
      category: "entrees",
      price: 6.99,
    },
    {
      id: 8,
      name: "beef with broccoli",
      imageURL: "/beef-with-broccoli.jpg",
      category: "entrees",
      price: 6.99,
    },
    {
      id: 9,
      name: "chicken chow mein",
      imageURL: "/chicken-chow-mein.jpg",
      category: "entrees",
      price: 5.99,
    },
    {
      id: 10,
      name: "chicken fried rice",
      imageURL: "/chicken-fried-rice.jpg",
      category: "entrees",
      price: 5.99,
    },
    {
      id: 11,
      name: "chicken with broccoli",
      imageURL: "/chicken-with-broccoli.jpg",
      category: "entrees",
      price: 5.99,
    },
    {
      id: 12,
      name: "chicken with vegetables",
      imageURL: "/chicken-with-mixed-vegetables.jpg",
      category: "entrees",
      price: 5.99,
    },
    {
      id: 13,
      name: "chicken lo mein",
      imageURL: "/chicken-lo-mein.jpg",
      category: "entrees",
      price: 6.99,
    },
    {
      id: 14,
      name: "kung pao chicken",
      imageURL: "/kung-pao-chicken.jpg",
      category: "entrees",
      price: 5.99,
    },
    {
      id: 15,
      name: "mongolian beef",
      imageURL: "/mongolian-beef.jpg",
      category: "entrees",
      price: 6.99,
    },
    {
      id: 16,
      name: "orange chicken",
      imageURL: "/orange-chicken.jpg",
      category: "entrees",
      price: 8.99,
    },
    {
      id: 17,
      name: "sesame chicken",
      imageURL: "/sesame-chicken.jpg",
      category: "entrees",
      price: 5.99,
    },
    {
      id: 18,
      name: "shrimp fried rice",
      imageURL: "/shrimp-fried-rice.jpg",
      category: "entrees",
      price: 6.99,
    },
    {
      id: 19,
      name: "sweet & sour pork",
      imageURL: "/sweet-sour-pork.jpg",
      category: "entrees",
      price: 6.99,
    },
    {
      id: 20,
      name: "broccoli",
      imageURL: "/broccoli.jpg",
      category: "sides",
      price: 1.99,
    },
    {
      id: 21,
      name: "fried rice",
      imageURL: "/fried-rice.jpg",
      category: "sides",
      price: 1.99,
    },
    {
      id: 22,
      name: "white rice",
      imageURL: "/white-rice.jpg",
      category: "sides",
      price: 1.99,
    },
    {
      id: 23,
      name: "wonton soup",
      imageURL: "/wonton-soup.jpg",
      category: "sides",
      price: 1.99,
    },
    {
      id: 24,
      name: "brownie",
      imageURL: "/brownie.jpg",
      category: "desserts",
      price: 1.5,
    },
    {
      id: 25,
      name: "chocolate chip cookie",
      imageURL: "/chocolate-chip-cookie.jpg",
      category: "desserts",
      price: 0.99,
    },
    {
      id: 26,
      name: "fortune cookie",
      imageURL: "/fortune-cookie.jpg",
      category: "desserts",
      price: 0.5,
    },
  ];

  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, {
    cart: [],
    checkoutTotal: 0,
  });

  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, item });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: REMOVE_ITEM, itemId });
  };

  const updateItemInCart = (itemId, newQuantity) => {
    dispatch({ type: UPDATE_ITEM, itemId, newQuantity });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const updateCheckoutTotal = (newTotal) => {
    dispatch({ type: UPDATE_CHECKOUT_TOTAL, newTotal })
  }

  return (
    <ShopContext.Provider
      value={{
        menuItems: menuItems,
        cart: cartState.cart,
        checkoutTotal: cartState.checkoutTotal,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        updateItemInCart: updateItemInCart,
        clearCart: clearCart,
        updateCheckoutTotal: updateCheckoutTotal
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
