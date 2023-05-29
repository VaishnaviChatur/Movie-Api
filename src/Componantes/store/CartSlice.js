import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state , action){
            state.push(action.payload);
        },

        removeitem(state, action){
        //    return state.filter(item => item.id !==action.payload);
        const index = state.findIndex(item => item.id === action.payload);
        return state.filter((_, i) => i !== index);
        


        } 

    }
 
})

export const {addItem , removeitem}  = CartSlice.actions
export default CartSlice.reducer
