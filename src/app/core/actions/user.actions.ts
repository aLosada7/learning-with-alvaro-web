import { Action } from '@ngrx/store';

export enum UserActionTypes {
    LoadUser = 'LOAD_USER'
}

export class LoadUser implements Action {
    type = UserActionTypes.LoadUser;

    constructor(public payload?: any) {}
}

export type UserActionsUnion = LoadUser;
