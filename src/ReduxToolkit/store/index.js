import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart"

const store = configureStore({
    //Reduser
    reducer:{
        cart:cartReducer,
    }

})

export default store

