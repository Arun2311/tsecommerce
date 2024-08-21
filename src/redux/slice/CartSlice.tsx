import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: number;
  title: string;
  image: string;
  description: string;
  count: number;
};

interface CartState {
  cart: CartItem[];
  totalCount: number;
}

const initialState: CartState = {
  cart: [],
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'count'>>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }

      state.totalCount += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
