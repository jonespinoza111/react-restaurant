export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

const addItemToCart = (item, state) => {
  console.log("adding item", item);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    product => product.id === item.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...item, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const removeItemFromCart = (itemId, state) => {
  console.log("remove item: " + itemId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(product => product.id === itemId);

  updatedCart.splice(updatedItemIndex, 1);

  return { ...state, cart: updatedCart };
};

const updateItemInCart = (itemId, newQuantity, state) => {
  console.log('updating item: ', itemId);

  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(product => product.id === itemId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity = newQuantity;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItemToCart(action.item, state);

    case REMOVE_ITEM:
      return removeItemFromCart(action.itemId, state);

    case UPDATE_ITEM:
      return updateItemInCart(action.itemId, action.newQuantity, state);
    default:
      return state;
  }
};
