import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isConnected: !!localStorage.getItem("token"),
        token: localStorage.getItem("token") ?? ""
    },
    reducers: {
        login(state,action) {
            localStorage.setItem("token", action.payload)
            state.token = action.payload
            state.isConnected = true
        },
        logout(state) {
            localStorage.removeItem("token")
            state.token = ""
            state.isConnected = false
        }
    }
})

export const getStatus = (state) => state.user.isConnected

export const getToken = (state) => state.user.token

export const { logout, login } = userSlice.actions

export default userSlice.reducer