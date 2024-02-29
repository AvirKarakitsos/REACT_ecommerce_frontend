import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [{_id: 1, name: "produit 1"}, {_id: 2, name: "produit 5"}],
    reducers: {}
})

export const getAllList = (state) => {
    return state?.cart
}

export const cartLength = (state) => {
    return state?.cart.length
}

export default cartSlice.reducer