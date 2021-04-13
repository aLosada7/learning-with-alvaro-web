import { Action } from '@ngrx/store';

export enum AuthPageActionTypes {
    SignUp = '[Auth Page] Sign Up',
    Login = "[Auth Page] Login",
    RecoverPassword = "[Auth Page] Recover Password",
    CreatePassword = "[Auth Page] Create Password",
    EmailConfirmation = "[Auth Page] Email Confirmation",
    LoadUser = "[Auth Page] Load User"
}

export class SignUp implements Action {
    type = AuthPageActionTypes.SignUp;

    constructor(public payload: any) {}
}

export class Login implements Action {
    type = AuthPageActionTypes.Login;

    constructor(public payload: any) {}
}

export class RecoverPassword implements Action {
    type = AuthPageActionTypes.RecoverPassword;

    constructor(public payload: any) {}
}

export class CreatePassword implements Action {
    type = AuthPageActionTypes.CreatePassword;

    constructor(public payload: any) {}
}

export class EmailConfirmation implements Action {
    type = AuthPageActionTypes.EmailConfirmation;

    constructor(public payload: any) {}
}

export class LoadUser implements Action {
    type = AuthPageActionTypes.LoadUser;

    constructor() {}
}

export type AuthPageActionsUnion =
SignUp |
Login |
RecoverPassword |
CreatePassword |
EmailConfirmation |
LoadUser
