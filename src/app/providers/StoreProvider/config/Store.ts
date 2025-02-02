import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter/model/slice/counterSlice';
import { userReducer } from 'app/entities/User';
import { loginReducer } from 'app/features/authByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
