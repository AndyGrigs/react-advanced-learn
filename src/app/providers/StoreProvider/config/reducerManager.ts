// src/app/providers/StoreProvider/config/reducerManager.ts
import {
    Action, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

// export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>):ReducerManager {
//     // Create an object which maps keys to reducers
//     const reducers = { ...initialReducers };

//     // Create the initial combinedReducer
//     let combinedReducer = combineReducers(reducers);

//     // An array which is used to delete state keys when reducers are removed
//     let keysToRemove: StateSchemaKey[] = [];

//     return {
//         getReducerMap: () => reducers,

//         // The root reducer function exposed by this object
//         // This will be passed to the store
//         reduce: (state: StateSchema, action: Action) => {
//         // If any reducers have been removed, clean up their state first
//             if (keysToRemove.length > 0) {
//                 state = { ...state };
//                 keysToRemove.forEach((key) => {
//                     delete state[key];
//                 });
//                 keysToRemove = [];
//             }

//             // Delegate to the combined reducer
//             return combinedReducer(state, action);
//         },

//         // Adds a new reducer with the specified key
//         add: (key: StateSchemaKey, reducer: Reducer) => {
//             if (!key || reducers[key]) {
//                 return;
//             }

//             // Add the reducer to the reducer mapping
//             reducers[key] = reducer;

//             // Generate a new combined reducer
//             combinedReducer = combineReducers(reducers);
//         },

//         // Removes a reducer with the specified key
//         remove: (key: StateSchemaKey) => {
//             if (!key || !reducers[key]) {
//                 return;
//             }

//             // Remove it from the reducer mapping
//             delete reducers[key];

//             // Add the key to the list of keys to clean up
//             keysToRemove.push(key);

//             // Generate a new combined reducer
//             combinedReducer = combineReducers(reducers);
//         },
//     };
// }

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            console.log('remove function called');
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
