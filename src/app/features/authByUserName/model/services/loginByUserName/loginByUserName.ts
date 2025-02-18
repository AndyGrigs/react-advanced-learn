import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'app/entities/User';
import axios from 'axios';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:4445/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export default loginByUserName;
