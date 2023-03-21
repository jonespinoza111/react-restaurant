export const calculateTotal = (cart) => {
    let totalPrice =
      cart.length &&
      [...cart]
        .map((item) => item.price * item.quantity)
        .reduce((a, b) => a + b);

    return totalPrice;
};
