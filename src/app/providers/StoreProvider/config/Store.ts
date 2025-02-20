// src/app/providers/StoreProvider/config/Store.ts
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter/model/slice/counterSlice';
import { userReducer } from 'app/entities/User';
import axios from 'axios';
import { StateSchema, ReduxStoreWithManager } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { ThunkExtraArg } from './thunkConfig';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
): ReduxStoreWithManager {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: axios,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg, // <-- Der entscheidende Schritt
            },
        }),
    }) as ReduxStoreWithManager;

    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
