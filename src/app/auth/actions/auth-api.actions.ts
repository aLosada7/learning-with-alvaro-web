import { Action } from '@ngrx/store';
import { User } from '../models/User';

export enum AuthApiActionTypes {
  SignUpSuccess = '[Auth/API] Sign Up Success',
  SignUpFailure = '[Auth/API] Sign Up Failure',
  LoginSuccess = '[Auth/API] Login Success',
  LoginFailure = '[Auth/API] Login Failure',
  RecoverPasswordSuccess = '[Auth/API] Recover Password Success',
  RecoverPasswordFailure = '[Auth/API] Recover Password Failure',
  CreatePasswordSuccess = '[Auth/API] Create Password Success',
  CreatePasswordFailure = '[Auth/API] Create Password Failure',
  EmailConfirmationSuccess = '[Auth/API] Email Confirmation Success',
  EmailConfirmationFailure = '[Auth/API] Email Confirmation Failure',
  LoadUserSuccess = '[Auth/API] Load User Success',
  LoadUserFailure = '[Auth/API] Load User Failure',
}

export class SignUpSuccess implements Action {
    type = AuthApiActionTypes.SignUpSuccess;

    constructor(public payload?: any) {}
}

export class SignUpFailure implements Action {
    readonly type = AuthApiActionTypes.SignUpFailure;

    constructor(public payload: { error: any }) {}
}

export class LoginSuccess implements Action {
    type = AuthApiActionTypes.LoginSuccess;

    constructor(public payload?: any) {}
  }

export class LoginFailure implements Action {
    readonly type = AuthApiActionTypes.LoginFailure;

    constructor(public payload: { error: any }) {}
}

export class RecoverPasswordSuccess implements Action {
    type = AuthApiActionTypes.RecoverPasswordSuccess;

    constructor(public payload?: any) {}
  }

export class RecoverPasswordFailure implements Action {
    readonly type = AuthApiActionTypes.RecoverPasswordFailure;

    constructor(public payload: { error: any }) {}
}

export class CreatePasswordSuccess implements Action {
    type = AuthApiActionTypes.CreatePasswordSuccess;

    constructor(public payload?: any) {}
  }

export class CreatePasswordFailure implements Action {
    readonly type = AuthApiActionTypes.CreatePasswordFailure;

    constructor(public payload: { error: any }) {}
}

export class EmailConfirmationSuccess implements Action {
    type = AuthApiActionTypes.EmailConfirmationSuccess;

    constructor(public payload?: any) {}
  }

export class EmailConfirmationFailure implements Action {
    readonly type = AuthApiActionTypes.EmailConfirmationFailure;

    constructor(public payload: { error: any }) {}
}

export class LoadUserSuccess implements Action {
    type = AuthApiActionTypes.LoadUserSuccess;

    constructor(public payload: User) {}
  }

export class LoadUserFailure implements Action {
    readonly type = AuthApiActionTypes.LoadUserFailure;

    constructor(public payload: { error: any }) {}
}

export type AuthApiActionsUnion =
SignUpSuccess |
SignUpFailure |
LoginSuccess |
LoginFailure |
RecoverPasswordSuccess |
RecoverPasswordFailure |
CreatePasswordSuccess |
CreatePasswordFailure |
EmailConfirmationSuccess |
EmailConfirmationFailure |
LoadUserSuccess |
LoadUserFailure
