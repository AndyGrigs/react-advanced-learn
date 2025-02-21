import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
// import { StateSchema } from './StateSchema' // dein allgemeiner Store-State-Typ

export interface ThunkExtraArg {
    api: AxiosInstance; // Hier packst du rein, was du als "extra" brauchst
}

export interface ThunkConfig<T> {
    rejectValue: T; // Falls dein Thunk Fehlermeldungen als string zurückgibt
    extra: ThunkExtraArg;
    state: any; // Optional: hier kannst du statt `any` den `StateSchema` verwenden
    dispatch: Dispatch<AnyAction>;
}

