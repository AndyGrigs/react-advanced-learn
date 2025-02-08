import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export interface DynemicModuleLoaderProps {
  name: StateSchemaKey;
  children: React.ReactNode;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const DynemicModuleLoader: React.FC<DynemicModuleLoaderProps> = (
    props,
) => {
    const {
        children, name, reducer, removeAfterUnmount,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        if (removeAfterUnmount) {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name}` });
        }
        return () => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name}` });
        };
    // eslint-disable-next-line
  }, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
