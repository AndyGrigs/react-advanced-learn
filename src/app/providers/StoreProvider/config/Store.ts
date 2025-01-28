import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter/model/slice/counterSlice';
import { userReducer } from 'app/entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
