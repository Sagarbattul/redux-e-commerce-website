import {createSlice} from '@reduxjs/toolkit'
const cartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        add(state,action){
            const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      } else {
        state.push({ ...action.payload, quantity: 1,totalPrice: action.payload.price });
      }
            // state.push(action.payload);
        },

        remove(state,action){
            return state.filter((item)=> item.id !== action.payload);
        }
    }
})
export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;