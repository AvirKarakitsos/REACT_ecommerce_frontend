import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [], 
    reducers: {
        addProduct(state, action) {
            let index = state.findIndex(objet => objet.productId === action.payload.productId);
            
            if (index !== -1) {
                state[index].quantity = state[index].quantity + 1
            } else {
                state.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        deleteProduct(state, action) {
            let index = state.findIndex(objet => objet.productId === action.payload.productId);
            
            if(state[index].quantity === 1) state.splice(index,1)
            else state[index].quantity = state[index].quantity - 1
        },
        emptyCart(state) {
            let cartLength = state.length
            state.splice(0,cartLength)
        }
    }
})

export const getAllCart = (state) => {
    return state.cart
}

export const cartLength = (state) => {
     let result = state.cart.reduce((sum ,curr) => {
        sum += curr.quantity
        return sum
    },0)

    return result
}

export const cartTotal = (state) => {
    let result = state.cart.reduce((sum ,curr) => {
        sum += curr.unity*curr.quantity
        return sum
    },0)

    return result
}

export const { addProduct, deleteProduct, emptyCart } = cartSlice.actions

export default cartSlice.reducer