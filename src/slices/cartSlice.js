// REDUX TOOLKIT
import { createSlice } from "@reduxjs/toolkit";

// EXTERNAL LIB.
import { toast } from "react-toastify";

// INITIAL STATE
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// SLICE TO DEAL WITH ALL CART RELATED METHODS
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // REDUCER TO ADD ITEMS TO CART
    addToCart(state, action) {
      // Check if the item already exists in cart and get the index
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If alredy exists then increase the quantity
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        // If it already doesn't exist then create a new item
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      // Add cart data to local storage to persist user data after refresh
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // REDUCER TO DECREASE QUANTITY OF CART ITEMS
    decreaseCart(state, action) {
      // Find the given index of the item in cart
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Decrease the quantity only if the value is greater than 1
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        // If the quantity is 1 then we completely remove the item from the cart
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      // PUSH DATA TO LOCAL STORAGE
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // REDUCER TO DELETE ITEMS FROM CART
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },

    // REDUCER TO GET THE TOTAL QUANTITY AND VALUE OF CART ITEMS
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    // REDUCER TO REMOVE EVERYTHING FROM CART
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

// EXPORT ACTIONS
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
