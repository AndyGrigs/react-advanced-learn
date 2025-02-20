import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    it('should return error message when present', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'Invalid credentials',
                username: '',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('Invalid credentials');
    });

    it('should return an empty string when error is not present', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
