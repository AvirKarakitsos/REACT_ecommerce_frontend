import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [], 
    reducers: {
        addProduct(state, action) {
            state.push({
                ...action.payload,
                quantity: 1
            })
        }
    }
})

export const getAllCart = (state) => {
    return state.cart
}

export const cartLength = (state) => {
    return state?.cart.length
}

export const cartTotal = (state) => {
    let result = state.cart.reduce((sum ,curr) => {
        sum += curr.unity
        return sum
    },0)

    return result
}

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer