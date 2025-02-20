import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return login state', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                username: '123123',
                password: '123123',
                isLoading: false,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toBeUndefined();
    });
});
