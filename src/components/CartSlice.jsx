import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    Cart: [],
}

const CartSlice = createSlice({
    name:"CART",
    initialState:INITIAL_STATE,
    reducers:{
        add: (state,action)=>{
            state.Cart.push(action.payload)
        },
        remove: (state,action)=>{
            state.Cart = state.Cart.filter((item)=>item.id !== action.payload)
        }
    }

})

export const {add,remove} = CartSlice.actions
export default CartSlice.reducer