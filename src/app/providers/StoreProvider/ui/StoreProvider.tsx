import React from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/Store';
import { StateSchema } from '../config/StateSchema';

export interface indexProps {
children?: React.ReactNode;
initialState?: Partial<StateSchema>;
asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: indexProps) => {
    const store = createReduxStore(
initialState as StateSchema,
         asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
