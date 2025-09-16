import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //add to cart - when add to cart btn clicked from view & wishlist
        addToCart:(state,action)=>{
            //find product is in state
            const existingProduct = state?.find(item=>item.id == action.payload.id)
            if(existingProduct){
                //increment quantity
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
                const remainProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainProducts,existingProduct]
            }else{
                //add item to cart
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        }
        //remove from cart
        //increment quantity in cart
        //decrement cart in quantity
        //empty cart
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer