import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isConnected: !!localStorage.getItem("token"),
        token: localStorage.getItem("token") ?? ""
    },
    reducers: {
        login(state,action) {
            localStorage.setItem("token", action.payload.token)
            return action.payload
        },
        logout(state,action) {
            localStorage.removeItem("token")
            return action.payload
        }
    }
})

export const getStatus = (state) => state.user.isConnected

export const getToken = (state) => state.user.token


export const { logout, login } = userSlice.actions

export default userSlice.reducer