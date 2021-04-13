import { AuthPageActions, AuthApiActions  } from '../actions'
import { AuthApiActionTypes } from './auth-api.actions';
import { AuthPageActionTypes, EmailConfirmation } from './auth-page.actions';

describe('Auth actions', () => {
    describe('Sign up actions', () => {

        it('launch sign up action', () => {

            const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" }
            const action = new AuthPageActions.SignUp(payload);

            expect(action.type).toEqual(AuthPageActionTypes.SignUp);
            expect({...action}).toEqual({
                type: AuthPageActionTypes.SignUp,
                payload
            })
        });

        it('success sign up action', () => {
            const action = new AuthApiActions.SignUpSuccess();

            expect({...action}).toEqual({
                type: AuthApiActionTypes.SignUpSuccess
            })
        });

        it('failure sign up action', () => {

            const error = "Email already exists.";
            const action = new AuthApiActions.SignUpFailure({ error });

            expect({...action}).toEqual({
                type: AuthApiActionTypes.SignUpFailure,
                payload: { error }
            })

        });
    });

    describe('Login actions', () => {

        it('login action', () => {

            const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" }
            const action = new AuthPageActions.Login(payload);

            expect(action.type).toEqual(AuthPageActionTypes.Login);
            expect({...action}).toEqual({
                type: AuthPageActionTypes.Login,
                payload
            })
        });

        it('success login action', () => {
            const action = new AuthApiActions.LoginSuccess();

            expect({...action}).toEqual({
                type: AuthApiActionTypes.LoginSuccess
            })
        });

        it('failure login action', () => {

            const error = "Wrong credentials.";
            const action = new AuthApiActions.LoginFailure({ error });

            expect({...action}).toEqual({
                type: AuthApiActionTypes.LoginFailure,
                payload: { error }
            })

        });
    });

    describe('password recover actions', () => {

        it('password recover action', () => {

            const payload = { email: "aldc30sc@gmail.com" }
            const action = new AuthPageActions.RecoverPassword(payload);

            expect(action.type).toEqual(AuthPageActionTypes.RecoverPassword);
            expect({...action}).toEqual({
                type: AuthPageActionTypes.RecoverPassword,
                payload
            })
        });

        it('success password recover action', () => {
            const action = new AuthApiActions.RecoverPasswordSuccess();

            expect({...action}).toEqual({
                type: AuthApiActionTypes.RecoverPasswordSuccess
            })
        });

        it('failure password recover action', () => {

            const error = "Wrong e-mail.";
            const action = new AuthApiActions.RecoverPasswordFailure({ error });

            expect({...action}).toEqual({
                type: AuthApiActionTypes.RecoverPasswordFailure,
                payload: { error }
            })

        });
    });

    describe('create password actions', () => {

        it('create password action', () => {

            const payload = { password: "A123alvaro", repeatedPassword: "A123alvaro" }
            const action = new AuthPageActions.CreatePassword(payload);

            expect(action.type).toEqual(AuthPageActionTypes.CreatePassword);
            expect({...action}).toEqual({
                type: AuthPageActionTypes.CreatePassword,
                payload
            })
        });

        it('success create password action', () => {
            const action = new AuthApiActions.CreatePasswordSuccess();

            expect({...action}).toEqual({
                type: AuthApiActionTypes.CreatePasswordSuccess
            })
        });

        it('failure create password action', () => {

            const error = "Wrong e-mail.";
            const action = new AuthApiActions.CreatePasswordFailure({ error });

            expect({...action}).toEqual({
                type: AuthApiActionTypes.CreatePasswordFailure,
                payload: { error }
            })

        });
    });

    describe('email confirmation actions', () => {

        it('email confirmation action', () => {

            const payload = { evldr: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZGMzMHNjQGdtYWlsLmNvbSIsImlhdCI6MTYxMjg2NzQyMn0.zGmwZivfIL-8QprXz9xWeWHzpIFyRiVG5PoESQO_Hqk"}
            const action = new AuthPageActions.EmailConfirmation(payload);

            expect(action.type).toEqual(AuthPageActionTypes.EmailConfirmation);
            expect({...action}).toEqual({
                type: AuthPageActionTypes.EmailConfirmation,
                payload
            })
        });

        it('success email confirmation action', () => {
            const action = new AuthApiActions.EmailConfirmationSuccess();

            expect({...action}).toEqual({
                type: AuthApiActionTypes.EmailConfirmationSuccess
            })
        });

        it('failure email confirmation action', () => {

            const error = "Wrong e-mail.";
            const action = new AuthApiActions.CreatePasswordFailure({ error });

            expect({...action}).toEqual({
                type: AuthApiActionTypes.CreatePasswordFailure,
                payload: { error }
            })

        });
    });
});


