// src/app/providers/StoreProvider/config/Store.ts
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter/model/slice/counterSlice';
import { userReducer } from 'app/entities/User';
import { StateSchema, ReduxStoreWithManager } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema): ReduxStoreWithManager {
    // The root (initial) reducers
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    // Create a regular RTK store...
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    }) as ReduxStoreWithManager; // Tell TS we are extending the default store

    // Attach the reducerManager to the store
    store.reducerManager = reducerManager;

    return store;
}
