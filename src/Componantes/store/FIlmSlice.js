import { createSlice } from '@reduxjs/toolkit'


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})


const FilmSlice = createSlice({
    name: "film",
    initialState: {
        data: [],
        status: STATUSES.IDLE

    },
    reducers: {
        setProducts(state, action) {

            state.data = action.payload
        },

        setStatus(state, action) {

            state.status = action.payload
        },




    }

})

export const { setProducts, setStatus } = FilmSlice.actions
export default FilmSlice.reducer

//thunks has two type it is a normal function

export function fetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));


        try {
            const res = await fetch('https://www.omdbapi.com/?s=kabhi&apikey=43946add')
                // const res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=67d10e3a')
            const data = await res.json();
            dispatch(setProducts(data.Search))
            dispatch(setStatus(STATUSES.IDLE))

        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR))

        }

    }
}