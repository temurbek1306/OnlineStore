import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(
    localStorage.getItem("cart") || '{"items":[], "total":0}'
 );
function setLocalCart(item){
   localStorage.setItem("cart", JSON.stringify(item))
}



const cartSlice =  createSlice( {

   name:'cart',
   initialState, 

   reducers:{
      addToCart(state, action){
         const item = state.items.find((i)=> i.product.product.id === action.payload.id)
         if(item) item.product.count++;
         else state.items.push( { count:1, product:action.payload } )


         setLocalCart(state)
      }, 

      incItemCount(state, action){
         state.items.find((i)=> i.product.product.id === action.payload).product.count++;
         setLocalCart(state)
      },
      decItemCount(state, action){
         state.items.find((i)=> i.product.product.id === action.payload).product.count--;
         setLocalCart(state)
      },

      removeItemFromCart(state, action){

         state.items = state.items.filter((i)=> i.product.product.id !== action.payload )
         setLocalCart(state)

      }

   }
   
} )

export const {addToCart, incItemCount, decItemCount, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer;