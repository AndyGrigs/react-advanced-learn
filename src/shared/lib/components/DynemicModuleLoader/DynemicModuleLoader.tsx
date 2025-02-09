import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

export interface DynemicModuleLoaderProps {
  children: React.ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynemicModuleLoader: React.FC<DynemicModuleLoaderProps> = (
    props,
) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name}` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]:ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name}` });
                });
            }
        };
    // eslint-disable-next-line
  }, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
