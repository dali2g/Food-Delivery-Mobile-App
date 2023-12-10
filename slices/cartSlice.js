import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromcart: (state, action) => {
      let newcart = [...state.items];
      let itemIndex = state.items.findIndex(item=> item.id==action.payload.id);
      if(itemIndex>=0){
        newcart.splice(itemIndex, 1);
      }else{
        console.log("can't remove item as its not in the cart");
      }
      state.items = newcart
    },
    emptycart: (state, action)=>{
        state.items = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTocart, removeFromcart, emptycart } = cartSlice.actions

export const selectCartItems = state=> state.cart.items;

export const selectCartItemsById = (state, id)=> state.cart.items.filter(item=> item.id==id);

export const selectCartTotal = state=> state.cart.items.reduce((total, item)=> total = total += item.price, 0)

export default cartSlice.reducer