import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
        },
        //remove item -when clicked deletebutton in cart
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        //remove from cart
        //increment quantity in cart
        incrementQuantity:(state,action)=>{

            const existingProduct = state?.find(item=>item.id == action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state?.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,existingProduct]
        
        },
        //decrement cart in quantity
         decrementQuantity:(state,action)=>{

            const existingProduct = state?.find(item=>item.id == action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state?.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,existingProduct]
        
        },
        //empty cart
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addToCart,removeCartItem,incrementQuantity,decrementQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer