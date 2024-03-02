import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [], 
    reducers: {
        addProduct(state, action) {
            let index = state.findIndex(objet => objet.id === action.payload.id);
            
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
            let index = state.findIndex(objet => objet.id === action.payload.id);
            console.log(index)
            if(state[index].quantity === 1) state.splice(index,1)
            else state[index].quantity = state[index].quantity - 1
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

export const { addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer