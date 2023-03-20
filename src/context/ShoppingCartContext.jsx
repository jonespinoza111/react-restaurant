import React from "react";

export default React.createContext({
  menuItems: [],
  cart: [],
  addItemToCart: product => {},
  removeItemFromCart: productId => {},
  updateItemInCart: (productId, newQuantity) => {}
});
