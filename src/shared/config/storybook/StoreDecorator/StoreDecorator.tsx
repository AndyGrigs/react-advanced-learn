import React, { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'app/features/authByUserName/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

interface StoreDecoratorProps {
    initialState?: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
    children: ReactNode;
}

export const StoreDecorator = ({ 
    initialState = {}, 
    asyncReducers = {}, 
    children 
}: StoreDecoratorProps) => (
    <StoreProvider 
        initialState={initialState} 
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        {children}
    </StoreProvider>
);

// Функціональний декоратор для використання в stories
export const createStoreDecorator = (
    initialState: Partial<StateSchema> = {},
    asyncReducers: Partial<ReducersMapObject<StateSchema>> = {}
) => (Story: React.ComponentType) => (
    <StoreDecorator 
        initialState={initialState} 
        asyncReducers={asyncReducers}
    >
        <Story />
    </StoreDecorator>
);
