import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../type/LoginSchema';
import loginByUserByName from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserByName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserByName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
