// import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'app/features/authByUserName/model/slice/loginSlice';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

interface StoreDecoratorProps {
    initialState?: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
    children: ReactNode;
}

export const StoreDecorator = ({ initialState = {}, asyncReducers = {}, children }: StoreDecoratorProps) => (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        {children}
    </StoreProvider>
);
