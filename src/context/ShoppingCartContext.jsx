import React from "react";

export default React.createContext({
  menuItems: [],
  cart: [],
  checkoutTotal: 0,
  addItemToCart: product => {},
  removeItemFromCart: productId => {},
  updateItemInCart: (productId, newQuantity) => {},
  clearCart: () => {},
  updateCheckoutTotal: (newTotal) => {}
});
