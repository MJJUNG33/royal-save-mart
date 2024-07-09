import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    incrementCounter(state, action) {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );
      if (productIndex !== -1) {
        state[productIndex].count += 1;
      }
      localStorage.setItem("addedToCart", JSON.stringify(state));
    },

    decrementCounter(state, action) {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex !== -1) {
        const updatedCount = state[productIndex].count - 1;

        if (updatedCount === 0) {
          state.splice(productIndex, 1);
        } else {
          state[productIndex] = {
            ...state[productIndex],
            count: updatedCount,
          };
        }
        localStorage.setItem("addedToCart", JSON.stringify(state));
      }
    },

    addToCart(state, action) {
      const productToAdd = action.payload;
      const existingProduct = state.find(
        (product) => product.id === productToAdd.id
      );

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.push({ ...productToAdd, count: 1 });
      }

      localStorage.setItem("addedToCart", JSON.stringify(state));
    },

    removeFromCart(state, action) {
      const productId = action.payload;
      const updatedCart = state.filter((product) => product.id !== productId);
      localStorage.setItem("addedToCart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    initializeCart(state, action) {
      return [...action.payload];
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  addToCart,
  removeFromCart,
  initializeCart,
} = cartItems.actions;

export default configureStore({
  reducer: {
    cartItems: cartItems.reducer,
  },
});
