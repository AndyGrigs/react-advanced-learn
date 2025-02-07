// src/app/providers/StoreProvider/config/StateSchema.ts
import { Reducer } from 'react';
import { ReducersMapObject, Action, EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'app/entities/Counter';
import { UserSchema } from 'app/entities/User';
import { LoginSchema } from 'app/features/authByUserName';
import { CombinedState } from 'redux';

export interface StateSchema{
     counter: CounterSchema;
     user: UserSchema;
     loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
     getReducerMap: () => ReducersMapObject<StateSchema>;
     reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
     add<Key extends StateSchemaKey>(
          key: Key,
          reducer: Reducer<StateSchema[Key], Action>
        ): void;
     remove: (key: StateSchemaKey) => void;
   }

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
     reducerManager: ReducerManager;
   }
