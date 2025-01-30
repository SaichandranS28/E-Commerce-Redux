import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItems = state.items.find(item => item.id == action.payload.id)
            if(!existingItems) {
                state.items.push(action.payload)
                state.total = state.items.reduce((sum,item)=> (item.price*80) + sum, 0)
            }
            else{
                alert('Already Added to the cart')
            }
            
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id )
            state.total = state.total - (action.payload.price*80)
        },
        
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer