import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'app/entities/User';
import axios from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

const loginByUserByName = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUser',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post<User>('http://localhost:4445/login', {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

export default loginByUserByName;
