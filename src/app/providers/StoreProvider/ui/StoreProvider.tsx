import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/Store';
import { StateSchema } from '../config/StateSchema';

export interface indexProps {
children?: React.ReactNode;
initialState?: Partial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: indexProps) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
