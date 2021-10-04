import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    email: string;
    hash: string;
}

const initialState: LoginState = {
    email: "",
    hash: "",
};

const LOGIN = "login";

export const LoginSlice = createSlice({
    name: LOGIN,
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});
