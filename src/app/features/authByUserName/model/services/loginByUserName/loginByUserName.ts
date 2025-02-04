import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'app/entities/User';
import axios from 'axios';
import i18next from 'i18next';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

const loginByUserByName = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUser',
    async ({ username, password }, thankAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:4445/login', {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            thankAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return thankAPI.rejectWithValue(i18next.t('vi-vveli-nepravilnii-login-abo-parol'));
        }
    },
);

export default loginByUserByName;
