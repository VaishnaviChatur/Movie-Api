import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import filmReducer from './FIlmSlice'

const store = configureStore({
    reducer: {
        cart : cartReducer, 
        film: filmReducer,
    },
});

export default store;
