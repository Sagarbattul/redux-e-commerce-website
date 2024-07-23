// selectors.js
export const selectCartTotal = (state) => {
    return state.cart.reduce((total, item) => total + item.totalPrice, 0);
  };
  